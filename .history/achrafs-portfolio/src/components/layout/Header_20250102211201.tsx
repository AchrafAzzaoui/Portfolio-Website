import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="flex ">
        <div className="basis-1/4 flex-auto  border-red-500">
          <h2>Achraf Azzaoui</h2>
        </div>{" "}
        <div className="basis-2/4 flex-auto  border-red-500">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>{" "}
        <div className="basis-1/4 flex-auto border-red-500"></div>
      </nav>
    </header>
  );
}
