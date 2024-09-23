"use client"
import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';

import PortFolioSlider from './PortFolioSlider/PortFolioSlider';



const PortFolio = () => {




  return (
    <div id='portfolio' className=' mt-20 md:mt-[100px]'>
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle title='My Portfolio' subtitle='VISIT MY PORTFOLIO'></SectionTitle>   
      </div>

      <PortFolioSlider></PortFolioSlider>


    </div>
  );
};

export default PortFolio;