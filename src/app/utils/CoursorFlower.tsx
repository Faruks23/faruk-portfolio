'use client'
import { useEffect } from 'react';

import Image from 'next/image';
export default function CursorFlower() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    // const flower = document.getElementById('flower');
    if (cursor) {
          
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
  
       
      });
        }
  }, []);

  return (
    <>
      <div id="cursor" className='cursor  z-50  overflow-hidden mix-blend-difference hidden md:block'>
        <Image className='object-cover' src={'https://img.fruugo.com/product/6/66/935785666_0340_0340.jpg'} width={90} height={90} alt='flag'  ></Image>
      </div>
      
    </>
  );
}
