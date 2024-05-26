import React from 'react';
import Container from '../../Common/Container';
import { Image } from '@nextui-org/react';
import LeftHero from './LeftHero';
import Line from '../../Common/Line';

const Hero = () => {
  return (
    <Container>
      <div className=' min-h-svh'>
        <div className="hero-container flex  flex-col-reverse md:flex-row  items-center h-full  mt-16">
          <LeftHero></LeftHero>
          <div className="right-hero-content md:w-[50%] flex justify-end relative items-center pt-[20%] md:pt-[10%] ">
            <div data-aos="zoom-in"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration='1500' className="image-container max-h-[540px] sd-1 max-w-[500px]  ">
              <div  className=' mt-[-30%] '>
                <Image  src='https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png' width={700} height={760} alt='hero-image' className=' w-full  h-full   '></Image>
               </div>
            </div>
          </div>
        </div>
       <Line></Line>
      </div>
    </Container>
  );
};

export default Hero;