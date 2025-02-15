import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ scrollToSection, currentSection }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-12">
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-[rgba(34,34,54,0.35)] backdrop-blur-lg rounded-2xl shadow-lg p-4 justify-center items-center z-50 md:block hidden">
        <nav>
          <ul className="flex gap-8 text-white font-bold justify-center">
            <li
              className={`cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-gray-300 ${
                currentSection === "about" ? "text-gray-300" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </li>

            <li
              className={`cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-gray-300 ${
                currentSection === "experience" ? "text-gray-300" : ""
              }`}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </li>

            <li
              className={`cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-gray-300 ${
                currentSection === "skills" ? "text-gray-300" : ""
              }`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>

            <li
              className={`cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-gray-300 ${
                currentSection === "projects" ? "text-gray-300" : ""
              }`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[rgba(34,34,54,0.35)] backdrop-blur-lg p-4  flex justify-between items-center md:hidden">
        <div className="text-white font-bold text-xl pl-2">Portfolio</div>
        <button onClick={toggleSidebar} className="text-white text-3xl z-50 pr-2">
        <GiHamburgerMenu />
        </button>
      </header>
      <div
        className={`fixed top-0 right-0 w-64 bg-[rgba(34,34,54,0.85)] backdrop-blur-lg h-full z-30 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-8 p-4 text-white font-bold justify-center items-center h-full pt-24">
            <li
              className="cursor-pointer transition-transform duration-200"
              onClick={() => {
                scrollToSection("about");
                toggleSidebar();
              }}
            >
              About
            </li>

            <li
              className="cursor-pointer transition-transform duration-200"
              onClick={() => {
                scrollToSection("experience");
                toggleSidebar();
              }}
            >
              Experience
            </li>

            <li
              className="cursor-pointer transition-transform duration-200"
              onClick={() => {
                scrollToSection("skills");
                toggleSidebar();
              }}
            >
              Skills
            </li>

            <li
              className="cursor-pointer transition-transform duration-200"
              onClick={() => {
                scrollToSection("projects");
                toggleSidebar();
              }}
            >
              Projects
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
