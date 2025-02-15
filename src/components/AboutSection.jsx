import React, { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";

const AboutSection = () => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(300 - Math.random() * 100);
  const [showCursor, setShowCursor] = useState(true);
  const textOptions = ["Antonios", "Web Developer", "Mobile Developer"];
  const displayDuration = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text]);

  useEffect(() => {
    if (!isDeleting && text === textOptions[textIndex % textOptions.length]) {
      const cursorBlink = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorBlink);
    } else {
      setShowCursor(true);
    }
  }, [text, isDeleting]);

  const tick = () => {
    let i = textIndex % textOptions.length;
    let fullText = textOptions[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(displayDuration);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setTextIndex(textIndex + 1);
      setTypingSpeed(100);
    }
  };

  return (
    <section
      id="about"
      className="bg-[#1a1a29] pt-40 text-white px-2 lg:px-6 overflow-x-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex-1 text-left pl-4 lg:pl-6">
          <h1 className="text-4xl md:text-5xl font-bold">Hello 👋 I'm</h1>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            {text}
            <span
              className={`${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              |
            </span>
          </h1>
          <p className="text-lg text-[#D1D1E0] mt-4">
            I'm passionate about creating performant, high-quality apps and
            constantly learning new technologies to stay on top of the latest
            trends.
            <br /> I enjoy building intuitive, user-friendly experiences that
            deliver real value.
          </p>
          <SocialLinks />
        </div>
        <div className="flex justify-center p-6 md:w-[300px] w-full">
          <img src="/portfolio/programer.svg" alt="profile" className="lg:block hidden" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
