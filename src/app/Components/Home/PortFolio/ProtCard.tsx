import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProtCard = () => {
  return (
    <>
      <div className=" what-i-do-card  h-[450px] p-4 w-[400px] rounded-md ">
        <div className="mb-4 overflow-hidden  flex justify-center">
          <div className=" mb-2 ">
            <Image width={340} height={250} src={'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg'} alt="icon" className=' rounded-md hover:scale-105 duration-250'></Image>
          </div>

        </div>
        <div className="sub-title flex  justify-between items-center">
          <p className=' uppercase font-medium text-[12px] tracking-wide text-green-500'>gallery</p>
          <div className=' flex items-center gap-2'>
            <Heart className=' hover:text-green-500 hover:scale-105 duration-150 overflow-hidden w-[18px] h-[18px]'  />
            <p className=' text-green-500 text-[18px]'>0</p>
           </div>
        </div>

        <div className="p-title">
          <h2 className="text-[22px] font-semibold mt-5 hover:text-green-500 duration-200">{"NFT Dashboard Application Development."}</h2>
        </div>



      </div>

    </>
  );
};

export default ProtCard;