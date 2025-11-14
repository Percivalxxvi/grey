import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#1e293b] rounded-xl h-40 lg:p-6 p-3 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:bg-[#243447] cursor-pointer pb-2"
    >
      <h4 className="text-xl lg:text-2xl font-semibold text-white mb-3 mt-5">
        {title}
      </h4>
      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 italic">
        {description}
      </p>
    </a>
  );
};

export default ProjectCard;
