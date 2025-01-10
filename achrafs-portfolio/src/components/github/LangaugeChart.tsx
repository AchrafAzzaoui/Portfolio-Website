interface LanguageChartProps {
  repositories: {
    edges: Array<{
      node: {
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
}

interface ProcessedRepo {
  languages: {
    [key: string]: {
      color: string;
      percentage: number;
    };
  };
}

export default function LanguageChart({ repositories }: LanguageChartProps) {
  const processedRepos: ProcessedRepo[] = repositories.edges.map(({ node }) => {
    const totalSize = node.languages.totalSize;
    const languages = node.languages.edges.reduce(
      (acc, { size, node: lang }) => {
        acc[lang.name] = {
          color: lang.color,
          percentage: (size / totalSize) * 100,
        };
        return acc;
      },
      {} as ProcessedRepo["languages"]
    );
    return { languages };
  });

  const languagesWithAvgPercentage = processedRepos.reduce(
    (acc, { languages }) => {
      Object.entries(languages).forEach(([name, { color, percentage }]) => {
        if (!acc[name]) {
          acc[name] = { color, percentage: 0 };
        }
        acc[name].percentage += percentage;
      });
      return acc;
    },
    {} as { [key: string]: { color: string; percentage: number } }
  );

  // Calculate average percentage
  const numRepos = processedRepos.length;
  Object.keys(languagesWithAvgPercentage).forEach((lang) => {
    languagesWithAvgPercentage[lang].percentage /= numRepos * 100;
  });

  if (
    languagesWithAvgPercentage["Jupyter Notebook"] &&
    languagesWithAvgPercentage["Python"]
  ) {
    languagesWithAvgPercentage["Python"].percentage +=
      languagesWithAvgPercentage["Jupyter Notebook"].percentage;
    delete languagesWithAvgPercentage["Jupyter Notebook"];
  }
  if (
    languagesWithAvgPercentage["Makefile"] &&
    languagesWithAvgPercentage["C"]
  ) {
    languagesWithAvgPercentage["C"].percentage +=
      languagesWithAvgPercentage["Makefile"].percentage;
    delete languagesWithAvgPercentage["Makefile"];
  }

  const sortedLanguages = Object.entries(languagesWithAvgPercentage)
    .sort(([, a], [, b]) => b.percentage - a.percentage)
    .slice(0, 5); // Top 5 languages

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl md:text-4xl font-medium text-dark-text-primary mt-7 md:mt-0 md:mb-6">
        Language Breakdown (Top 5)
      </h3>
      <div className="flex flex-col gap-5">
        {sortedLanguages.map(([name, { color, percentage }]) => (
          <div key={name} className="flex flex-col gap-1 group">
            <div className="flex justify-between text-sm">
              <span className="text-dark-text-secondary text-xl font-display">
                {name}
              </span>
              <span className="text-dark-text-secondary text-lg">
                {(percentage * 100).toFixed(1)}%
              </span>
            </div>
            <div className="h-3 w-full bg-slate-700/50 rounded-md overflow-hidden mt-1">
              <div
                className="h-full rounded-md transition-all duration-300 ease-in-out transform group-hover:scale-[1.02] group-hover:brightness-125"
                style={{
                  width: `${percentage * 100}%`,
                  backgroundColor: color,
                  boxShadow: `0 0 20px ${color}80`,
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
