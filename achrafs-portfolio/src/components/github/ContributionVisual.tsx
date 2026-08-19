import { motion } from "framer-motion";

interface ContributionVisualProps {
  contributionsThisMonth: {
    totalCommitContributions: number;
    totalPullRequestContributions: number;
    totalIssueContributions: number;
  };
  contributionsThisYear: {
    totalCommitContributions: number;
    totalPullRequestContributions: number;
    totalIssueContributions: number;
  };
}

export default function ContributionVisual({
  contributionsThisMonth,
  contributionsThisYear,
}: ContributionVisualProps) {
  const totalContributionsThisMonth =
    contributionsThisMonth.totalCommitContributions +
    contributionsThisMonth.totalPullRequestContributions +
    contributionsThisMonth.totalIssueContributions;
  const totalContributionsThisYear =
    contributionsThisYear.totalCommitContributions +
    contributionsThisYear.totalPullRequestContributions +
    contributionsThisYear.totalIssueContributions;
  return (
    <div className="flex flex-col md:flex-row gap-4 align-middle">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex basis-1/2 flex-col items-center justify-center py-6 gap-2 md:gap-1 card-surface"
      >
        <h4 className="text-3xl font-bold text-fg">
          {totalContributionsThisMonth}
        </h4>
        <h4 className="text-fg-secondary text-2xl ">
          Contributions this month
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex basis-1/2 flex-col items-center justify-center py-6 gap-2 md:gap-1 card-surface"
      >
        <h4 className="text-3xl font-semibold text-fg">
          {totalContributionsThisYear}
        </h4>
        <h4 className="text-fg-secondary text-2xl">
          Contributions this year
        </h4>
      </motion.div>
    </div>
  );
}
