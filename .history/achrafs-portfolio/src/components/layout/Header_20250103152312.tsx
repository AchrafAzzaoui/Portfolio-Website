import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-0 py-4">
      <nav className="flex ">
        <div className="basis-3/16 flex-auto flex justify-center items-center font-display font-bold text-dark-text-primary">
          <a href="#home" target="_blank">
            <h2 className="text-3xl transition-transform duration-300 hover:-translate-y-0.5">
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
              zIndex: 10, // Ensure proper layering
              border: "2px solid #8B5CF6", // Purple border
              position: "relative", // For proper positioning of pseudo-elements
              borderRadius: "0.375rem", // Match the border-radius
              overflow: "hidden", // Clip pseudo-element overflow
            }}
            className="
    inline-block px-6 py-2 font-semibold font-display bg-transparent text-white group
    hover:border-purple-500
    before:absolute before:content-[''] before:inset-0
    before:-translate-x-full before:bg-gradient-to-r before:from-purple-600
    before:to-purple-800 before:rounded-md before:z-0
    before:transition-transform before:duration-300 before:ease-out
    hover:before:translate-x-0
  "
          >
            <span className="relative z-10 text-lg">Contact</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
