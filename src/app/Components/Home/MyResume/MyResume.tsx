import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ProtCard from '../PortFolio/ProtCard';
import SkillCard from './SkillCard';
import { FaHtml5, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiMongodb, SiMongoose, SiExpress } from "react-icons/si";

const MyResume = () => {
  const webDevTechnologies = [
    {
      name: "HTML",
      image: <FaHtml5 className='w-20 h-20 text-green-600 ' />,
      description: "The standard markup language used to create web pages."
    },
    {
      name: "CSS",
      image: <IoLogoCss3 className='w-20 h-20 text-green-600 ' />,
      description: "A style sheet language used for describing the presentation of a document written in HTML."
    },
    {
      name: "Tailwind CSS",
      image: <RiTailwindCssFill className='w-20 h-20 text-green-600 ' />,
      description: "A utility-first CSS framework for rapidly building custom user interfaces."
    },
    {
      name: "Bootstrap",
      image: <FaBootstrap className='w-20 h-20 text-green-600 ' />,
      description: "A front-end framework for developing responsive and mobile-first websites."
    },
    {
      name: "JavaScript",
      image: <IoLogoJavascript className='w-20 h-20 text-green-600 ' />,
      description: "A programming language that is one of the core technologies of the World Wide Web."
    },
    {
      name: "React JS",
      image: <FaReact className='w-20 h-20 text-green-600 ' />,
      description: "A JavaScript library for building user interfaces."
    },
    {
      name: "Next JS",
      image: <SiNextdotjs className='w-20 h-20 text-green-600 ' />,
      description: "A React framework that enables functionality such as server-side rendering and static site generation."
    },
    {
      name: "Node JS",
      image: <FaNodeJs className='w-20 h-20 text-green-600 ' />,
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications."
    },
    {
      name: "Express JS",
      image: <SiExpress className='w-20 h-20 text-green-600 ' />,
      description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    },
    {
      name: "MongoDB",
      image: <SiMongodb className='w-20 h-20 text-green-600 ' />,
      description: "A source-available cross-platform document-oriented database program."
    },
    {
      name: "Mongoose",
      image: <SiMongoose className='w-20 h-20 text-green-600 ' />,
      description: "An elegant MongoDB object modeling for Node.js."
    },
    {
      name: "TypeScript",
      image: <BiLogoTypescript className='w-20 h-20 text-green-600 ' />,
      description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
    }
  ];

  return (
    <div className=' mt-20 md:mt-[100px]'>
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle title=' My Strength' subtitle='1+ Years OF Experience'></SectionTitle>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mt-16 md:mt-20  gap-5 md:gap-6  lg:gap-10 ">
        {webDevTechnologies.map(item => {
          return <SkillCard skill={item} key={ item.name+1}></SkillCard> })
        }
       
        
      </div>
    </div>
  );
};

export default MyResume;