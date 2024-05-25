"use client"
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ProtCard from './ProtCard';


const PortFolio = () => {

  const [selectedId, setSelectedId] = useState(null)


  return (
    <div id='portfolio' className=' mt-20 md:mt-[100px]'>
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle title='My Portfolio' subtitle='VISIT MY PORTFOLIO'></SectionTitle>   
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-20 gap-10">
        <ProtCard />
        <ProtCard />
        <ProtCard />
        <ProtCard />
        <ProtCard />
        <ProtCard />
      </div>
    </div>
  );
};

export default PortFolio;