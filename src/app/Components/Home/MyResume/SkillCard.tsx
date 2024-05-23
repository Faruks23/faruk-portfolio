import Image from 'next/image';
import React from 'react';

const SkillCard = ({skill}:any) => {

  
  return (
    <>
      <div className=" what-i-do-card  lg:h-[340px] p-4  lg:w-[300px] rounded-md ">
        <div className="mb-2 overflow-hidden  flex justify-center">
          <div className=" mb-2  h-[160px] w-[150px] ">
            <Image width={176} height={176} src={skill.image} alt="icon" className=' rounded-md hover:scale-105 duration-250 in-sd-1 p-5 w-full h-full object-cover '></Image>
          </div>

        </div>
        

        <div className="p-title">
          <h2 className="text-[22px] font-semibold mt-3 hover:text-green-500 duration-200">{skill.name}</h2>
        </div>
        <p className=' text-[14px] text-[#c4cfde] '> { skill.description}</p>



      </div>
      
    </>
  );
};

export default SkillCard;