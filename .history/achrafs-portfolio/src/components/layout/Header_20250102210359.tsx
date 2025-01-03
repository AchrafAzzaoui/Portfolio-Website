import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="flex ">
        <div className="basis-1/4"></div> /* This is where the logo will go */
        <div className="basis-3/4"></div> /* This is where the navigation links
        will go */
        <div className="basis-1/4"></div> /* This is where the social media
        links will go, and the contact form box */
      </nav>
    </header>
  );
}
