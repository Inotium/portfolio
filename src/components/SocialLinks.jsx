import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
  const downloadCv = () => {
    const pdfUrl = "/portfolio/CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV Kalogeropoulos Antonios.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex gap-4 items-center py-4">
      <div
        onClick={downloadCv}
        className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-2 px-6 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        Download CV
        <AiOutlineDownload className="ml-2 text-xl font-bold stroke-[2]" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/antonios-kalogeropoulos/",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <TiSocialLinkedinCircular className=" rounded-full w-10 h-10 bg-gradient-to-r from-pink-500 to-indigo-500 transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer" />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://github.com/Inotium",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <FaGithub className=" rounded-full w-10 h-10 bg-gradient-to-r from-pink-500 to-indigo-500 transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer" />
      </div>
      <div
   onClick={() =>
    window.location.href = "mailto:kalogeropoulos.tony@gmail.com" // Replace with your email
  }
>
  <MdEmail className="rounded-full p-1 w-10 h-10 bg-gradient-to-r from-pink-500 to-indigo-500 transition-transform duration-300 hover:scale-110 hover:shadow-lg cursor-pointer" />
</div>

    </div>
  );
};

export default SocialLinks;
