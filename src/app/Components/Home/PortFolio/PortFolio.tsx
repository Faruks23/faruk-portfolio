"use client"
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ProtCard from './ProtCard';


const PortFolio = () => {

  const PortFolio = [
    {
      name: 'Zeyox Studio',
      image: '/Home-Zeyox.png',
      link:'https://zeyoxstudio.com/'
    },
    {
      name: 'Cuvva Landing page',
      image: '/The-Car-and-van-insurance-Cuvva.png',
      link:'https://ephemeral-elf-5a2c25.netlify.app/'
    },
    {
      name: 'Gaming Frontend ',
      image:'/Gaming.png',
      link:'https://gaming-frontend-hr.vercel.app/'
    },
    {
      name: 'Rehub 2.0 Landing page',
      image: '/Rehub.png',
      link:'https://rehub1.netlify.app'
    },
    {
      name: 'Spoken English learning  website',
      image: '/ELearner.png',
      link:'https://elearner24.netlify.app/'
    },
    {
      name: 'ProAcademy Sport Training website',
      image: '/Pro-Academy (1).png',
      link:'https://pro-academy-f6025.web.app/'
    },
    {
      name: 'Collage Admissions',
      image: '/collage.png',
      link:'https://endearing-strudel-c0b0a7.netlify.app/'
    },
    {
      name: 'Organic Store',
      image: '/Organic-Store.png',
      link:'https://organic-store-delta.vercel.app/'
    },
    {
      name: 'Exam Result',
      image: '/result.png',
      link:'https://modern-result.vercel.app/'
    },
    {
      name: 'Justice Landing Page',
      image: '/justice.png',
      link: 'https://mdfaruksp23.netlify.app'
    },
   
    
  ]


  return (
    <div id='portfolio' className=' mt-20 md:mt-[100px]'>
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle title='My Portfolio' subtitle='VISIT MY PORTFOLIO'></SectionTitle>   
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-20 gap-10">
        {PortFolio.map((item,index )=> {
          return <ProtCard item={item} key={index+1} />
        
        })}
        
      </div>
    </div>
  );
};

export default PortFolio;