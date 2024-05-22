import React from 'react';
import Container from '../../Common/Container';
import { Image } from '@nextui-org/react';

const Hero = () => {
  return (
    <Container>
      <div className=' min-h-svh'>
        <div className="hero-container flex  flex-col-reverse md:flex-row  items-center h-full  mt-16">
          <div className="left-hero-content md:w-[50%]">
            <p className=' subtitle'>WELCOME TO MY WORLD</p>
            <h1 className="title">Hi, I’m
              <span className='text-green-500 ml-4'>Md.Faruk</span>
              <br />
              <span className="header-caption ">
             
                <span className="cd-headline clip is-full-width  font-thin">
                  <span>a Developer </span>
               
                  
                </span>
              </span>
            </h1>
            <p className="description"><span>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</span></p>
          </div>
          <div className="right-hero-content md:w-[50%] flex justify-center items-center">
            <div className="image-container h-[500px] sd-1 max-w-[500px] relative">
              <Image src='https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png' width={700} height={760} alt='hero-image' className=' w-full h-full absolute top-[-10%]'></Image>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;