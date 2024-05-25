
import React from 'react';

const SkillCard = ({skill,index}:any) => {

  
  return (
    <>
      <div data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration={`${index*400}`}
        className=" what-i-do-card  lg:h-[300px] p-4  lg:w-[300px] rounded-md ">
        <div className="mb-2 overflow-hidden  flex ">
          
            <div className="h-20 w-20 mb-2 rounded-full  p-2 in-sd-1  flex  items-center">
            {skill?.image}
         
            </div>

        

        </div>
        

        <div className="p-title  mt-10">
          <h2 className="text-[22px] font-semibold mt-3 hover:text-green-500 duration-200">{skill.name}</h2>
        </div>
        <p className=' text-[14px] text-[#c4cfde] '> { skill.description}</p>



      </div>
      
    </>
  );
};

export default SkillCard;