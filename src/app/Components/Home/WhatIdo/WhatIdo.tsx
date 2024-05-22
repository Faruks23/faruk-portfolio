import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import Card from './what-we-do-card/Card';
import Line from '../../Common/Line';

const WhatIdo = () => {
  const webDevelopmentTopics = [
    {
      icon:'/',
      topic: "Frontend Development",
      description: "Designing and implementing the user interface using HTML, CSS, and JavaScript frameworks like React, Vue, or Angular.",
      tasks: ["Creating responsive layouts", "Implementing interactive features", "Optimizing performance"]
    },
    {
      icon: '/',
      topic: "Backend Development",
      description: "Building and maintaining the server-side logic, databases, and APIs using languages like Node.js, Python, or Ruby.",
      tasks: ["Setting up server environments", "Integrating databases", "Ensuring security and scalability"]
    },
    
   
    {
      icon: '/',
      topic: "Web Performance Optimization",
      description: "Ensuring web applications load quickly and run smoothly for an optimal user experience.",
      tasks: ["Optimizing assets and code", "Implementing lazy loading", "Monitoring and analyzing performance metrics"]
    },
    {
      icon: '/',
      topic: "Security",
      description: "Implementing security best practices to protect web applications from vulnerabilities and attacks.",
      tasks: ["Performing security audits", "Implementing authentication and authorization", "Ensuring data encryption"]
    },
    
    {
      icon: '/',
      topic: "Version Control",
      description: "Using version control systems like Git to manage and collaborate on codebases.",
      tasks: ["Committing and merging code changes", "Creating and reviewing pull requests", "Managing branches and releases"]
    },
    
    {
      icon: '/',
      topic: "API Development",
      description: "Creating and integrating APIs to enable communication between different parts of the application and with external services.",
      tasks: ["Designing RESTful APIs", "Implementing GraphQL endpoints", "Documenting API usage"]
    },
   
   
    
    
  ];

  return (
    <div className=' mt-20 md:mt-[150px]'>
      <SectionTitle title='What I Do' subtitle='FEATURES'></SectionTitle>
      <div className="what-ido-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 md:gap-8 mt-16">
        {
          webDevelopmentTopics.map((topic,index) => {
          return <Card topic={topic} key={index+1}></Card>
        })
          
          }
      </div>
      <Line></Line>
    </div>
  );
};

export default WhatIdo;