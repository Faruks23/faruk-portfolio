import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ProtCard from '../PortFolio/ProtCard';
import SkillCard from './SkillCard';

const MyResume = () => {
  const webDevTechnologies = [
    {
      name: "HTML",
      image:"/html.png",
      description: "The standard markup language used to create web pages."
    },
    {
      name: "CSS",
      image: "/css.png",
      description: "A style sheet language used for describing the presentation of a document written in HTML."
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.png",
      description: "A utility-first CSS framework for rapidly building custom user interfaces."
    },
    {
      name: "Bootstrap",
      image: "/boot.png",
      description: "A front-end framework for developing responsive and mobile-first websites."
    },
    {
      name: "JavaScript",
      image: "/js.png",
      description: "A programming language that is one of the core technologies of the World Wide Web."
    },
    {
      name: "React JS",
      image: "/react.png",
      description: "A JavaScript library for building user interfaces."
    },
    {
      name: "Next JS",
      image: "/nextjs.png",
      description: "A React framework that enables functionality such as server-side rendering and static site generation."
    },
    {
      name: "Node JS",
      image: "/node.png",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications."
    },
    {
      name: "Express JS",
      image: "/express.png",
      description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    },
    {
      name: "MongoDB",
      image: "/mongo.png",
      description: "A source-available cross-platform document-oriented database program."
    },
    {
      name: "Mongoose",
      image: "/public/",
      description: "An elegant MongoDB object modeling for Node.js."
    },
    {
      name: "TypeScript",
      image: "/ts.png",
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