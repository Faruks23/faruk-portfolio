import React from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import ProfileCard from './ProfileCard';

const About = () => {
  return (
    <>
      <div className="mt-20 md:mt-[100px] ">
        <div className="prot-title flex justify-center !text-center md:mt-5">
          <SectionTitle
            title="Who am I?"
            subtitle="About Me"
          ></SectionTitle>
        </div>
       <ProfileCard></ProfileCard>
        
      </div>
    </>
  );
};

export default About;