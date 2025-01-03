import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-2 py-4 border-4 border-red-500">
      <nav className="flex ">
        <div className="basis-1/4 flex-auto flex justify-center align-middle border-4 border-red-500">
          <h2>Achraf Azzaoui</h2>
        </div>
        <div className="basis-2/4 flex-auto flex justify-evenly align-middle border-4 border-red-500">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="basis-1/4 flex-auto flex justify-evenly align-middle border-4 border-red-500">
          <h1>social media icons</h1>
          <h1>social media icons</h1>
        </div>
      </nav>
    </header>
  );
}
