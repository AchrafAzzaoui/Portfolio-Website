import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className=" fixed top-0 left-0 right-0 z-50 backdrop-blur-sm  shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-b transition-shadow duration-300 border-white/10 px-2 xl:px-10 py-5">
        <nav className="flex ">
          <div className="basis-3/16 flex-auto flex justify-start pl-8 md:pl-0 md:justify-center items-center font-display font-bold text-dark-text-primary">
            <a href="#home">
              <h2 className="text-2xl transition-transform duration-300 hover:-translate-y-0.5">
                Achraf Azzaoui
              </h2>
            </a>
          </div>
          <div className="hidden md:flex basis-7/16 flex-auto flex justify-evenly items-center">
            <a
              href="#about"
              className="font-sans font-medium text-dark-text-primary text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              About
            </a>
            <a
              href="#skills"
              className="font-sans font-medium text-dark-text-primary text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="font-sans font-medium text-dark-text-primary text-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Projects
            </a>
          </div>
          <div className="hidden md:flex basis-6/16 flex-auto justify-evenly items-center">
            <a href="https://www.linkedin.com/in/achraf-azzaoui-data-scientist">
              <RxLinkedinLogo className="text-3xl rounded-sm text-dark-text-primary hover:text-dark-text-customcolor hover:scale-110" />
            </a>
            <a href="https://github.com/AchrafAzzaoui">
              <FaGithub className="text-3xl rounded-full text-dark-text-primary hover:text-dark-text-customcolor hover:scale-110" />
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
    inline-block px-7 py-2 font-semibold font-display bg-transparent text-white group
    hover:border-purple-500
    before:absolute before:content-[''] before:inset-0
    before:-translate-x-full before:bg-gradient-to-r before:from-purple-600
    before:to-purple-800 before:z-0
    before:transition-transform before:duration-300 before:ease-out
    hover:before:translate-x-0
  "
            >
              <span className="relative z-10 text-lg">Contact</span>
            </button>
          </div>
          <div className="md:hidden basis-3/16 flex-auto flex justify-end px-8 items-center">
            <button
              onClick={() => setIsMenuOpen((prevMenuOpen) => !prevMenuOpen)}
              className="text-4xl text-dark-text-primary"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 z-50`}
        >
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <h1>hi</h1>
        </div>
      )}
    </>
  );
}
