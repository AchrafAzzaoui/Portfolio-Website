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

function contributionWindow() {
  const now = new Date();
  const to = now.toISOString();
  return {
    fromMonth: new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)
    ).toISOString(),
    fromYear: new Date(Date.UTC(now.getUTCFullYear(), 0, 1)).toISOString(),
    to,
  };
}

const contributionsQuery = gql`
  query GetContributions($from: DateTime!, $to: DateTime!) {
    viewer {
      contributionsCollection(from: $from, to: $to) {
        startedAt
        endedAt
        contributionCalendar {
          totalContributions
        }
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalIssueContributions
        restrictedContributionsCount
      }
    }
  }
`;

const repositoriesQuery = gql`
  query GetRepositories {
    viewer {
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

function shapeContributions(collection) {
  return {
    startedAt: collection.startedAt,
    endedAt: collection.endedAt,
    totalContributions: collection.contributionCalendar.totalContributions,
    totalCommitContributions: collection.totalCommitContributions,
    totalPullRequestContributions: collection.totalPullRequestContributions,
    totalPullRequestReviewContributions:
      collection.totalPullRequestReviewContributions,
    totalIssueContributions: collection.totalIssueContributions,
    restrictedContributionsCount: collection.restrictedContributionsCount,
  };
}

export async function fetchAndCacheGitHubData() {
  const { fromMonth, fromYear, to } = contributionWindow();

  // GitHub often ignores the second date range when two contributionsCollection
  // aliases share one query, so month and year must be fetched separately.
  const [monthData, yearData, repoData] = await Promise.all([
    graphQLClient.request(contributionsQuery, { from: fromMonth, to }),
    graphQLClient.request(contributionsQuery, { from: fromYear, to }),
    graphQLClient.request(repositoriesQuery),
  ]);

  const data = {
    viewer: {
      contributionsThisMonth: shapeContributions(
        monthData.viewer.contributionsCollection
      ),
      contributionsThisYear: shapeContributions(
        yearData.viewer.contributionsCollection
      ),
      repositories: repoData.viewer.repositories,
    },
  };

  fs.writeFileSync(CACHE_PATH, JSON.stringify(data, null, 2), "utf8");
  return data;
}

function isCollapsedRangeCache(data) {
  const month = data?.viewer?.contributionsThisMonth;
  const year = data?.viewer?.contributionsThisYear;
  if (!month || !year) return true;
  if (month.startedAt && year.startedAt) {
    return month.startedAt === year.startedAt;
  }
  return (
    month.totalCommitContributions === year.totalCommitContributions &&
    month.totalPullRequestContributions === year.totalPullRequestContributions
  );
}

export function readCachedGitHubData() {
  try {
    if (!fs.existsSync(CACHE_PATH) || fs.statSync(CACHE_PATH).size === 0) {
      return null;
    }
    const data = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
    if (isCollapsedRangeCache(data)) return null;
    return data;
  } catch {
    return null;
  }
}
