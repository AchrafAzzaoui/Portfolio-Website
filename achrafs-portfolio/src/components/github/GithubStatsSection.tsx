import ContributionVisual from "./ContributionVisual";
import CurrentProject from "./CurrentProject";
import LanguageChart from "./LangaugeChart";
import useGithubProfileStats from "../../hooks/fetchGithubData";

export default function GithubStatsSection() {
  const apiUrl = "/githubProfileStats";
  const { data, loading, error } = useGithubProfileStats(apiUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div></div>;
  if (!data) return null;

  return (
    <section className="flex flex-col gap-12 mt-16 md:mt-36">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-semibold text-dark-text-primary mb-12 text-center">
          Github Activity
        </h2>
        <div
          className="flex flex-col gap-4 md:gap-16 align-middle"
          id="github-activity"
        >
          <ContributionVisual
            contributionsThisMonth={data.viewer.contributionsThisMonth}
            contributionsThisYear={data.viewer.contributionsThisYear}
          />
          <CurrentProject repositories={data.viewer.repositories} />
          <LanguageChart repositories={data.viewer.repositories} />
        </div>
      </div>
    </section>
  );
}
