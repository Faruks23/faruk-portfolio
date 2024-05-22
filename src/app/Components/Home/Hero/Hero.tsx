import React from 'react';
import Container from '../../Common/Container';
import { Image } from '@nextui-org/react';
import LeftHero from './LeftHero';

const Hero = () => {
  return (
    <Container>
      <div className=' min-h-svh'>
        <div className="hero-container flex  flex-col-reverse md:flex-row  items-center h-full  mt-16">
          <LeftHero></LeftHero>
          <div className="right-hero-content md:w-[50%] flex justify-end relative items-center pt-[10%] ">
            <div className="image-container h-[540px] sd-1 max-w-[500px]  ">
              <div className=' mt-[-30%]'>
                <Image src='https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png' width={700} height={760} alt='hero-image' className=' w-full  h-full   '></Image>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;