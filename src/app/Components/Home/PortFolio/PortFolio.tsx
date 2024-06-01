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
      name: 'ProAcademy Sport Training website',
      image: '/Pro-Academy (1).png',
      link:'https://pro-academy-f6025.web.app/'
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
      name: 'Zeyox Studio',
      image: '/Home-Zeyox.png',
      link:'https://zeyoxstudio.com/'
    },
    {
      name: 'Zeyox Studio',
      image: '/Home-Zeyox.png',
      link:'https://zeyoxstudio.com/'
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