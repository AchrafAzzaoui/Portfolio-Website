import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-2 py-4 border-8 border-red-500">
      <nav className="flex ">
        <div className="basis-3/16 flex-auto flex justify-center items-center font-display font-bold text-dark-text-primary">
          <a href="#home" target="_blank">
            <h2 className="text-2xl">Achraf Azzaoui</h2>
          </a>
        </div>
        <div className="basis-7/16 flex-auto flex justify-evenly items-center">
          <a
            href="#about"
            target="_blank"
            className="font-sans font-medium text-dark-text-primary text-xl"
          >
            About
          </a>
          <a
            href="#skills"
            target="_blank"
            className="font-sans font-medium text-dark-text-primary text-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            target="_blank"
            className="font-sans font-medium text-dark-text-primary text-xl"
          >
            Projects
          </a>
        </div>
        <div className="basis-6/16 flex-auto flex justify-evenly items-center">
          <a href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist">
            <RxLinkedinLogo className="text-4xl rounded-sm text-dark-text-primary" />
          </a>
          <a href="https://github.com/AchrafAzzaoui">
            <FaGithub className="text-4xl rounded-full text-dark-text-primary" />
          </a>
          <button className="relative inline-block px-5 py-2 font-semibold rounded-md border-2 border-purple-600 bg-gradient-to-r from-purple-600 to-purple-800 text-white transition-all duration-300 hover:from-purple-500 hover:to-indigo-600 hover:border-indigo-600">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
