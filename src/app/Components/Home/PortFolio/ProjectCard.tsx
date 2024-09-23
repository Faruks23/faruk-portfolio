// components/ProjectCard.js
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  image: string;
  projectName: string;
  liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, projectName, liveDemoLink }) => {
  return (
   
      <div className="relative group  max-w-[700px]   rounded-lg shadow-lg  overflow-hidden h-[450px] bg-slate-300 ">
        {/* Project Image */}
        <Image
          src={image}
          alt={projectName}
          width={600}
          height={450}
          className="object-contain  w-full h-[450px] "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center  top-0 left-0  w-full h-full">
          <div className="text-center text-white">
            <h3 className="text-lg font-bold mb-2">{projectName}</h3>
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default ProjectCard;
