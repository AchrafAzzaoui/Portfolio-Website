import ContributionVisual from "./ContributionVisual";
import CurrentProject from "./CurrentProject";
import LanguageChart from "./LangaugeChart";
import useGithubProfileStats from "../../hooks/fetchGithubData";

export default function GithubStatsSection() {
  const { data, loading, error } = useGithubProfileStats("githubProfileStats");

  return (
    <section className="flex flex-col gap-12 mt-16 md:mt-36">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-semibold text-fg mb-12 text-center">
          Github Activity
        </h2>
        {loading && (
          <p className="text-fg-secondary text-center">Loading activity...</p>
        )}
        {!loading && (error || !data) && (
          <p className="text-fg-secondary text-center">
            GitHub stats unavailable right now.
          </p>
        )}
        {data && (
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
        )}
      </div>
    </section>
  );
}
