import ExperienceSection from "../experience/ExperienceSection";

export default function AboutExperience() {
  return (
    <section
      className="flex flex-col items-center  gap-20 md:gap-36 mt-4 md:mt-36 pt-6 md:pt-12"
      id="about"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-semibold text-fg mb-12 text-center">
          About Me
        </h2>

        <div className="space-y-8 text-fg text-lg leading-relaxed">
          {/* Introduction */}
          <p>
            Hi there! Thanks for checking out my portfolio. I'm a senior at
            Rice University studying Computer Science. I'm currently working as a SWE Intern at Amazon -- this past summer, I was a SWE Intern at LinkedIn.
          </p>

          {/* Interests & Passion */}
          <p>
            As generic as it sounds, I really do enjoy tackling difficult problems and thinking at the systems layer, 
            whether that means literally getting close to the hardware, like my educational Assembly Visualizer for Computer Organization at Rice, or tackling the types of problems that make you pull out a whiteboard and start reasoning from first principles.
            
          </p>
          <p>
          Some of my favorite problems I've worked on have looked pretty distinct: building that Assembly Visualizer I mentioned, designing profitable algo trading strategies for the IMC Prosperity trading competition that are somehow not overfit, and creating safe, stateful agent harnesses at LinkedIn.
        </p>
        <p>
      Currently working on a benchmarking project for different RAG indices with the core written in C++. This was partially motivated by wanting to get better at the language itself, but also by curiosity about how vector databases work under the hood after using them in applied AI projects. Completely unrelated to that, also working on an Elo rating and competition organizing tool for our suite's FIFA tournaments.
          </p>
          <p>

            Outside of work, I love to read. Would highly recommend Michael Sandel's The Tyranny of Merit: What's Become of the Common Good?
            Also love to play and watch soccer (visca barca!)

          </p>
          {/* Technical Skills */}


          {/* Contact */}
          <p>

          I'm currently looking for 2027 new grad opportunities in Software Engineering! I'm open to a wide variety of domains and product areas; what matters most to me is getting to work on hard problems with great engineers, particularly across backend engineering, ML/AI, and infrastructure.
          </p>
          <p>
            If you think I'd be a good fit for your team, want to collaborate on a project, or just want to chat, feel free to reach out to me at{" "}
            <a
              href="mailto:aa270@rice.edu"
              className="underline hover:text-accent-soft transition-colors"
            >
              aa270@rice.edu
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/achraf-azzaoui/"
              className="underline hover:text-accent-soft transition-colors"
            >
              LinkedIn
            </a>{" "}
             about any opportunities or collaborations on projects! 
          </p>
        </div>
      </div>

      <ExperienceSection />
    </section>
  );
}
