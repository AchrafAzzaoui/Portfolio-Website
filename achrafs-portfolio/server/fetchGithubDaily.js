import { fetchAndCacheGitHubData } from "./githubService.js";

// This will run once when the cron job executes
console.log("Starting GitHub data fetch...");
await fetchAndCacheGitHubData();
console.log("GitHub data fetch complete!");
