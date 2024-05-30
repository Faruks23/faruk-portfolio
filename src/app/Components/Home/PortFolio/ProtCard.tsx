import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProtCard = ({item}:any) => {
  return (
    <Link href={item.link}>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration='1000'

        className=" what-i-do-card  lg:h-[450px] p-4 lg:w-[400px] rounded-md ">
        <div className="mb-4 overflow-hidden  flex justify-center">
          <div className=" mb-2 h-[250px] ">
            <Image width={340} height={250} src={item.image} alt="icon" className=' rounded-md hover:scale-105 duration-250 w-full p-2 in-sd-1 h-full'></Image>
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
          <h2 className="text-[22px] font-semibold mt-5 hover:text-green-500 duration-200">{item.name}</h2>
        </div>



      </div>

    </Link>
  );
};

export default ProtCard;