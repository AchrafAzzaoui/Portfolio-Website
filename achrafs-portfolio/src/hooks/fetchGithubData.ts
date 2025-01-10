import { useState, useEffect } from "react";

export interface GithubData {
  viewer: {
    contributionsThisMonth: {
      totalCommitContributions: number;
      totalPullRequestContributions: number;
      totalPullRequestReviewContributions: number; // Missing in interface
      totalIssueContributions: number;
      restrictedContributionsCount: number; // Missing in interface
    };
    contributionsThisYear: {
      // Add this
      totalCommitContributions: number;
      totalPullRequestContributions: number;
      totalPullRequestReviewContributions: number;
      totalIssueContributions: number;
      restrictedContributionsCount: number;
    };
    repositories: {
      edges: Array<{
        node: {
          name: string;
          url: string;
          updatedAt: string;
          languages: {
            totalSize: number;
            edges: Array<{
              size: number;
              node: {
                color: string;
                name: string;
              };
            }>;
          };
        };
      }>;
    };
  };
}
interface GithubDataHookResult {
  data: GithubData | null;
  loading: boolean;
  error: Error | null;
}
const useGithubProfileStats = (apiUrl: string) => {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000${apiUrl}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};
export default useGithubProfileStats;
