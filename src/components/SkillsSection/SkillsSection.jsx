import React from "react";
import data from "../../data.json";
import SkillItem from "./SkillItem";

function SkillsSection() {
  return (
    <section id="skills" className="pt-24  px-6 ">
      <h2 className="text-center text-5xl mb-[20px]">
        <span className="bg-gradient-to-r from-[#ff7b7b] to-[#7b77ff] bg-clip-text text-transparent">
          My Skills
        </span>
      </h2>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 px-6">
        {data.skills.map((skill, index) => (
          <SkillItem key={skill.id} skillData={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
