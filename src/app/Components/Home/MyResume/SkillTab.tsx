'use client'

import React from 'react';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FaHtml5, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiMongodb, SiMongoose, SiExpress, SiGithub, SiFigma, SiVercel, SiNetlify } from "react-icons/si";
import SkillCard from './SkillCard';
const SkillTab = () => {

  const Frontend = [
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
  ]
  const Backend = [

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
   
  ];

  const tools = [
    {
      name: "TypeScript",
      image: <BiLogoTypescript className='w-20 h-20 text-green-600' />,
      description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
    },
    {
      name: "GitHub",
      image: <SiGithub className='w-20 h-20 text-green-600' />,
      description: "A web-based interface that uses Git, the open-source version control software, to help you manage your source code history."
    },
    {
      name: "Figma",
      image: <SiFigma className='w-20 h-20 text-green-600' />,
      description: "A web-based graphics editing and user interface design app that works on any operating system that runs a web browser."
    },
    {
      name: "Vercel",
      image: <SiVercel className='w-20 h-20 text-green-600' />,
      description: "A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database."
    },
    {
      name: "Netlify",
      image: <SiNetlify className='w-20 h-20 text-green-600' />,
      description: "An all-in-one platform for automating modern web projects, providing hosting, continuous deployment, and version control."
    },
  ];




  return (
    <div className=' mt-16'>
      <div className="flex w-full flex-col">
        <Tabs className='w-full display-inherit' aria-label="Options">
          <Tab key="Frontend" title="Frontend">
            <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mt-5  gap-5 md:gap-6  lg:gap-10 ">
              {Frontend.map(item => {
                return <SkillCard skill={item} key={item.name + 1}></SkillCard>
              })
              }


            </div>
          </Tab>
          <Tab key="Backend" title="Backend">
            <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mt-5   gap-5 md:gap-6  lg:gap-10 ">
              {Backend.map(item => {
                return <SkillCard skill={item} key={item.name + 1}></SkillCard>
              })
              }


            </div>
          </Tab>
          <Tab key="Tools" title="Tools">
            <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mt-5  gap-5 md:gap-6  lg:gap-10 ">
              {tools.map(item => {
                return <SkillCard skill={item} key={item.name + 1}></SkillCard>
              })
              }


            </div>
          </Tab>
        </Tabs>
      </div>   
    </div>
  );
};

export default SkillTab;