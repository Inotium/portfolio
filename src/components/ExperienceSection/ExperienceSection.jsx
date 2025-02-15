import React from "react";
import data from "../../data.json";
import TimelineItem from "./TimeLineItem";
 
const ExperienceSection = () => (
  <section id="experience" className="pt-24  md:px-6">
    <h2 className="text-center text-5xl mb-[20px]">
      <span className="bg-gradient-to-r from-[#ff7b7b] to-[#7b77ff] bg-clip-text text-transparent">
        My Experience
      </span>
    </h2>
    <div className="relative w-full max-w-6xl mx-auto flex flex-col px-6">
      {data.experience.map((experience) => (
        <TimelineItem key={experience.id} experienceData={experience} />
      ))}
    </div>
  </section>
);

export default ExperienceSection;
