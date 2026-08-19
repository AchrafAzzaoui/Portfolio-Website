import ExperienceSection from "../experience/ExperienceSection";

export default function AboutExperience() {
  return (
    <section
      className="flex flex-col items-center  gap-20 md:gap-36 mt-4 md:mt-36 pt-6 md:pt-12"
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-semibold text-fg mb-12 text-center">
          About Me
        </h2>

        <div className="space-y-8 text-fg text-lg leading-relaxed">
          {/* Introduction */}
          <p>
            Hey! 👋 Thanks for checking out my portfolio. I'm a sophomore at
            Rice University studying Computer Science and Statistics.
          </p>

          {/* Interests & Passion */}
          <p>
            I'm passionate about building impactful software and exploring
            the intersection of technology and society. In my free time, I
            love to read non-fiction books, play soccer, and play board/video games.
          </p>

          {/* Technical Skills */}
          <p>
            I'm always learning new technologies and have experience across
            the whole software development stack:
          </p>

          <div className="pl-4 space-y-2">
            <p>• Front-end: React, Tailwind, CSS3</p>
            <p>• Back-end: FastAPI, Spring Boot, Django</p>
            <p>• ML/AI: PyTorch, TensorFlow</p>
          </div>

          {/* Contact */}
          <p>
            Feel free to reach out to me at{" "}
            <a
              href="mailto:aa270@rice.edu"
              className="underline hover:text-accent-soft transition-colors"
            >
              aa270@rice.edu
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist"
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
