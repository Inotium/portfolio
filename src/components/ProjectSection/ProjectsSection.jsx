import React from "react";
import { FaGithub } from "react-icons/fa";
import data from "../../data.json";
import ProjectCard from "./ProductCard";

 
const ProjectsSection = () => (
  <section id="projects" className="pt-24 px-6 md:px-6">
    <h2 className="text-center text-5xl mb-[20px]">
      <span className="bg-gradient-to-r from-[#ff7b7b] to-[#7b77ff] bg-clip-text text-transparent">
        My Projects
      </span>
    </h2>
    <div className="relative w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-6 px-6">
      {data.projects.map((project) => (
        <ProjectCard key={project.id} projectData={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
