import { fetchAndCacheGitHubData } from "./githubService.js";

console.log("Starting GitHub data fetch...");
await fetchAndCacheGitHubData();
console.log("GitHub data fetch complete!");
