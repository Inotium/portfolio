import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import data from "../../data.json";

const ProjectCard = ({ projectData }) => {
  const itemRef = useRef(null);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showImage, setShowImage] = useState(true);

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

  useEffect(() => {
    if (imgRef.current) {
      const height = imgRef.current.clientHeight;
      if (height > 250) {
        setShowImage(false);
      }
    }
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative mb-[6px] rounded-[12px] shadow-lg flex flex-col md:flex-row items-stretch overflow-hidden group
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}
    transition-all duration-800 ease-in-out hover:scale-105
    backdrop-blur-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(34,34,54,0.35)]`}
    >
      {showImage && (
        <div
          ref={imgRef}
          className="w-full md:w-[500px] flex-shrink-1 h-[200px] md:h-[250px]"
        >
          <img
            src={projectData.image}
            alt={projectData.title}
            className="w-full h-full object-cover bg-center"
          />
        </div>
      )}

      <div className="flex-grow text-left p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold">{projectData.title}</h3>
          <p className="text-base text-[#D1D1E0] mt-2">{projectData.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-end space-x-4">
          <a href={projectData.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="rounded-full w-10 h-10 bg-gradient-to-r from-pink-500 to-indigo-500 cursor-pointer transform-gpu group-hover:scale-102 transition-all duration-300" />
          </a>

          {projectData.liveDemo && (
            <a
              href={projectData.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-2 px-6 rounded-2xl flex items-center justify-center cursor-pointer transform-gpu group-hover:scale-102 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;