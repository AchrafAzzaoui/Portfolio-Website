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
        className="flex basis-1/2 flex-col items-center justify-center py-6 gap-2 md:gap-1 rounded-lg
     bg-gradient-to-br from-slate-900 to-slate-800
      border-2 border-white/5
      hover:border-purple-500/40
      transition-all duration-300 ease-in-out
      hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
      >
        <h4 className="text-3xl font-bold text-white">
          {totalContributionsThisMonth}
        </h4>
        <h4 className="text-dark-text-secondary text-2xl ">
          Contributions this month
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex basis-1/2 flex-col items-center justify-center py-6 gap-2 md:gap-1 rounded-lg
     bg-gradient-to-br from-slate-900 to-slate-800
      border-2 border-white/5
      hover:border-purple-500/40
      transition-all duration-300 ease-in-out
      hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
      >
        <h4 className="text-3xl font-semibold text-white">
          {totalContributionsThisYear}
        </h4>
        <h4 className="text-dark-text-secondary text-2xl">
          Contributions this year
        </h4>
      </motion.div>
    </div>
  );
}
