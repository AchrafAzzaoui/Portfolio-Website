import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GraphQLClient, gql } from "graphql-request";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const CACHE_PATH = path.join(__dirname, "githubData.json");

const apiKey = process.env.GITHUB_API_KEY;
if (!apiKey) {
  throw new Error("GITHUB_API_KEY is required");
}

const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: { authorization: `Bearer ${apiKey}` },
});

function getDynamicDateRanges() {
  const now = new Date();
  return {
    firstDayOfMonth: new Date(now.getFullYear(), now.getMonth(), 1).toISOString(),
    lastDayOfMonth: new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59
    ).toISOString(),
    firstDayOfYear: new Date(now.getFullYear(), 0, 1).toISOString(),
    lastDayOfYear: new Date(now.getFullYear(), 11, 31, 23, 59, 59).toISOString(),
  };
}

const query = gql`
  query GetGitHubData(
    $fromMonth: DateTime!
    $toMonth: DateTime!
    $fromYear: DateTime!
    $toYear: DateTime!
  ) {
    viewer {
      contributionsThisMonth: contributionsCollection(
        from: $fromMonth
        to: $toMonth
      ) {
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalIssueContributions
        restrictedContributionsCount
      }
      contributionsThisYear: contributionsCollection(
        from: $fromYear
        to: $toYear
      ) {
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalIssueContributions
        restrictedContributionsCount
      }
      repositories(
        orderBy: { field: UPDATED_AT, direction: DESC }
        first: 100
      ) {
        edges {
          node {
            name
            url
            updatedAt
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              totalSize
              edges {
                size
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function fetchAndCacheGitHubData() {
  const { firstDayOfMonth, lastDayOfMonth, firstDayOfYear, lastDayOfYear } =
    getDynamicDateRanges();

  const data = await graphQLClient.request(query, {
    fromMonth: firstDayOfMonth,
    toMonth: lastDayOfMonth,
    fromYear: firstDayOfYear,
    toYear: lastDayOfYear,
  });

  fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2), "utf8");
  return data;
}

export function readCachedGitHubData() {
  try {
    if (!fs.existsSync(CACHE_PATH) || fs.statSync(CACHE_PATH).size === 0) {
      return null;
    }
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return null;
  }
}
