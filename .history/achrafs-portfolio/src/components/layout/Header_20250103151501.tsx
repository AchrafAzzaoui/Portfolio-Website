import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-2 py-4">
      <nav className="flex ">
        <div className="basis-3/16 flex-auto flex justify-center items-center font-display font-bold text-dark-text-primary">
          <a href="#home" target="_blank">
            <h2 className="text-2xl transition-transform duration-300 hover:-translate-y-0.5">
              Achraf Azzaoui
            </h2>
          </a>
        </div>
        <div className="basis-7/16 flex-auto flex justify-evenly items-center">
          <a
            href="#about"
            target="_blank"
            className="font-sans font-medium text-dark-text-primary text-xl transition-transform duration-300 hover:-translate-y-0.5"
          >
            About
          </a>
          <a
            href="#skills"
            target="_blank"
            className="font-sans font-medium text-dark-text-primary text-xl transition-transform duration-300 hover:-translate-y-0.5"
          >
            Skills
          </a>
          <a
            href="#projects"
            target="_blank"
            className="font-sans font-medium text-dark-text-primary text-xl transition-transform duration-300 hover:-translate-y-0.5"
          >
            Projects
          </a>
        </div>
        <div className="basis-6/16 flex-auto flex justify-evenly items-center">
          <a href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist">
            <RxLinkedinLogo className="text-3xl rounded-sm text-dark-text-primary" />
          </a>
          <a href="https://github.com/AchrafAzzaoui">
            <FaGithub className="text-3xl rounded-full text-dark-text-primary" />
          </a>
          <button
            style={{
              position: "relative",
              display: "inline-block",
              padding: "0.5rem 1.25rem",
              fontWeight: "600",
              fontFamily: "inherit",
              borderRadius: "0.375rem",
              border: "2px solid #8B5CF6", // Purple border
              backgroundColor: "transparent",
              color: "#FFFFFF", // White text
              overflow: "hidden",
              zIndex: 10,
              cursor: "pointer",
            }}
            className="group hover:border-purple-500"
          >
            <div
              style={{
                content: "''",
                position: "absolute",
                inset: "0",
                transform: "translateX(-100%)",
                backgroundImage: "linear-gradient(to right, #7C3AED, #5B21B6)", // Purple gradient
                borderRadius: "0.375rem",
                zIndex: 0,
                transition: "transform 0.3s ease-out",
              }}
              className="group-hover:transform group-hover:translate-x-0"
            ></div>
            <span
              style={{
                position: "relative",
                zIndex: 10,
                fontSize: "1.125rem", // Text size (18px)
              }}
            >
              Contact
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
