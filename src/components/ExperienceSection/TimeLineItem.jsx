import React, { useEffect, useRef, useState } from "react";




const TimelineItem = ({ experienceData }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  const descriptionParagraphs = experienceData.description
    .split("\n")
    .map((paragraph, index) => (
      <div key={index}>
        <p className="text-base text-[#D1D1E0]">{paragraph}</p>
        <br />
      </div>
    ));

  const bulletPoints = experienceData.bullets.map((bullet, index) => (
    <li key={index} className="text-base text-[#D1D1E0]">
      {bullet}
    </li>
  ));

  return (
    <div
      ref={itemRef}
      className={`relative p-11 rounded-[12px] shadow-[0_8px_16px_rgba(0,0,0,0.2)] flex flex-col md:flex-row md:items-center
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[150px]"
        }
        transition-all duration-800 ease-in-out hover:scale-105 hover:shadow-[0_8px_12px_rgba(0,0,0,0.2)]
        backdrop-blur-[15px] border border-[rgba(255,255,255,0.15)] bg-[rgba(34,34,54,0.35)]`}
    >
      <div
        className="relative mb-[15px] md:mb-0 md:absolute md:left-[-30px] md:top-1/2 md:transform md:-translate-y-1/2
        flex items-center justify-center bg-gradient-to-r from-[#ff7b7b] to-[#7b77ff] rounded-full w-[64px] h-[64px]
        shadow-[0_0_10px_rgba(0,0,0,0.2)]"
      >
        <span className="text-white text-[16px] font-bold">
          {experienceData.is_present ? "Present" : experienceData.years}
        </span>
      </div>

      <div className="md:ml-[40px] flex-grow text-left">
        <h3 className="text-2xl">{experienceData.title}</h3>
        <h4 className="text-[1.2rem] text-[#6b7280] mb-[10px]">
          {experienceData.company}
        </h4>
        {descriptionParagraphs}
        <ul>{bulletPoints}</ul>
      </div>
    </div>
  );
};

export default TimelineItem;