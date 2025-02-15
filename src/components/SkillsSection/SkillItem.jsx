import React, { useEffect, useRef, useState } from "react";


 
const SkillItem = ({   skillData }) => {
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

  return (
    <div
      ref={itemRef}
      className={`w-32 h-32 bg-[rgba(34,34,54,0.35)] backdrop-blur-lg rounded-2xl shadow-lg flex justify-center items-center
        transition-all duration-800 ease-in-out transform hover:scale-115
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[50px]"
        }`}
    >
      <img
        src={skillData.image}
        alt={skillData.image.replace(".png", "")}
        className="w-5/6 h-5/6 object-contain"
      />
    </div>
  );
};

export default SkillItem;