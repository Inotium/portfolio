import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
 
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectSection/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
 
function App() {
  const [currentSection, setCurrentSection] = useState("");

   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }
  };

 
  return (
    <div  className="bg-[#1a1a29] text-white min-h-screen overflow-y-scroll  sm:px-8">
      <Header scrollToSection={scrollToSection} />
      <main className="flex flex-col min-h-screen">
        <AboutSection id="about"/>
        <ExperienceSection id="experience" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" />
        <div className="py-24"></div>
      </main>
    </div>
  );
}

export default App;
