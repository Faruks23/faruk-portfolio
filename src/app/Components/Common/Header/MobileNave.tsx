import React from 'react';
import { NavLink } from './Header';
import Link from 'next/link';


const MobileNave = () => {
  return (
    <div className=' block md:hidden fixed bottom-0 left-0 w-full z-50'>
      <ul className='w-full h-[60px] bg-[#212428]  flex gap-5 items-center justify-center sd-1 py-1'>
        {NavLink.slice(0,4).map(link => {
          return (
            <>
              <li className=' flex flex-col justify-center items-center  p-2  in-sd-1 rounded-2xl w-[70px]'>
                 {link?.icon}
                <Link data-aos="zoom-in"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration='1000' color="foreground" className='hover-underline-animation  text-[#c4cfde] text-sm' href={link.path}>
                  {link.name}
                </Link>
              </li>
            </>
          )
        })}
       </ul>
    </div>
  );
};

export default MobileNave;