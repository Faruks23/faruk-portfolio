import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import SkillTab from './SkillTab';


const MyResume = () => {
  
  return (
    <div className=' mt-20 md:mt-[100px]'>
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle title=' My Strength' subtitle='1+ Years OF Experience'></SectionTitle>
      </div>

      <SkillTab></SkillTab>
     
    </div>
  );
};

export default MyResume;