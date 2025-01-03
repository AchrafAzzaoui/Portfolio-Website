import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-2 py-4 border-8 border-red-500">
      <nav className="flex ">
        <div className="basis-1/4 flex-auto flex justify-center items-center font-display font-bold text-dark-text-primary border-4 border-red-500">
          <h2 className="text-xl">Achraf Azzaoui</h2>
        </div>
        <div className="basis-2/4 flex-auto flex justify-evenly items-center border-4 border-red-500">
          <a
            href="#home"
            className="font-sans font-medium text-dark-text-primary text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-sans font-medium text-dark-text-primary text-lg"
          >
            About
          </a>
          <a
            href="#skills"
            className="font-sans font-medium text-dark-text-primary text-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="font-sans font-medium text-dark-text-primary text-lg"
          >
            Projects
          </a>
        </div>
        <div className="basis-1/4 flex-auto flex justify-evenly items-center border-4 border-red-500">
          <RxLinkedinLogo className="text-4xl text-dark-text-primary" />
          <FaGithub className="text-4xl text-dark-text-primary" />
          <button className="px-10 py-2.5">Contact </button>
        </div>
      </nav>
    </header>
  );
}
