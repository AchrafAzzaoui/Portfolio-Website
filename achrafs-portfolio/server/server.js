import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodeCron from "node-cron";
import { GraphQLClient, gql } from "graphql-request";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(limiter);

const PORT = process.env.PORT || 5000;

const apiKey = process.env.GITHUB_API_KEY;
app.use(cors());

if (!apiKey) {
  throw new Error("GITHUB_API_KEY is required");
}
const url = "https://api.github.com/graphql";
const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${apiKey}`,
  },
});

const filePath = path.join(__dirname, "githubData.json");
const senderEmail = process.env.EMAIL_ACCOUNT;
const senderPassword = process.env.EMAIL_PASSWORD;
const recipientEmail = "aa270@rice.edu";

const getDynamicDateRanges = () => {
  const now = new Date();

  const firstDayOfMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  ).toISOString();
  const lastDayOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59
  ).toISOString();
  const firstDayOfYear = new Date(now.getFullYear(), 0, 1).toISOString();
  const lastDayOfYear = new Date(
    now.getFullYear(),
    11,
    31,
    23,
    59,
    59
  ).toISOString();

  return {
    firstDayOfMonth,
    lastDayOfMonth,
    firstDayOfYear,
    lastDayOfYear,
  };
};

const fetchAndCacheGitHubData = async () => {
  const { firstDayOfMonth, lastDayOfMonth, firstDayOfYear, lastDayOfYear } =
    getDynamicDateRanges();

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

  const variables = {
    fromMonth: firstDayOfMonth,
    toMonth: lastDayOfMonth,
    fromYear: firstDayOfYear,
    toYear: lastDayOfYear,
  };

  try {
    const data = await graphQLClient.request(query, variables);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    console.log("GitHub data fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error.message);
  }
};

app.get("/githubProfileStats", (req, res) => {
  if (fs.existsSync(filePath)) {
    const fileStats = fs.statSync(filePath);
    if (fileStats.size > 0) {
      const cachedData = fs.readFileSync(filePath, "utf8");
      return res.json(JSON.parse(cachedData));
    }
  }

  fetchAndCacheGitHubData()
    .then(() => {
      const cachedData = fs.readFileSync(filePath, "utf8");
      res.json(JSON.parse(cachedData));
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

app.post("/sendContactFormSubmission", (req, res) => {
  const { name, email, subject, message } = req.query;

  const mailOptions = {
    from: senderEmail,
    to: recipientEmail,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
