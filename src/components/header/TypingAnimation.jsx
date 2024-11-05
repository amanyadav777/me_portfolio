import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: ["Coder", "Developer", "AI Enthusiast"],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typing"></span>;
};

export default TypingAnimation;
