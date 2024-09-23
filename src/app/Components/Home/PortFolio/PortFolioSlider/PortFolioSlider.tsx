"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { PortFolioData } from "@/app/utils/data";
import ProtCard from '../ProtCard';
function PortFolioSlider() {
  
  return (
    <div className="slider-container   mt-10  px-4 md:px-0" >
      <div className=" " >

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1248: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper "
        >
         

          {PortFolioData.map((project, index) => (
           
              <SwiperSlide>

              <ProtCard
                item={project}
              />
              </SwiperSlide>
          ))}
         
        </Swiper>
        
      </div>
    </div>
  );
}

export default PortFolioSlider;
