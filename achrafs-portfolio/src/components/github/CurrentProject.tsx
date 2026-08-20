import { FiArrowUpRight } from "react-icons/fi";
interface CurrentProjectProps {
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
}

export default function CurrentProject({ repositories }: CurrentProjectProps) {
  const repo = repositories.edges[0]?.node;

  return (
    <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-0">
      <h4 className=" text-2xl md:text-3xl font-light font-sans text-fg-secondary">
        Currently working on
      </h4>
      {repo ? (
        <>
          <h4 className="text-4xl md:text-5xl text-fg">{repo.name}</h4>
          {repo.url && (
            <a
              href={repo.url}
              className="text-accent group flex items-center hover:text-accent-soft transition-colors duration-200"
            >
              View Project
              <FiArrowUpRight className="inline-block ml-2 text-xl transform transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </>
      ) : (
        <p className="text-fg-secondary">No recent repositories.</p>
      )}
    </div>
  );
}
