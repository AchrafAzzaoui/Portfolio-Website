import { useState } from "react";
import Typewriter from "typewriter-effect";

const Typewriter = () => {
  const [typewriterText] = useState([
    "Full Stack Developer",
    "Data Scientist",
    "Machine Learning Engineer",
  ]);

  return (
    <Typewriter
      options={{
        strings: typewriterText,
        autoStart: true,
        loop: true,
      }}
    />
  );
};
