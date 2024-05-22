import Image from 'next/image';
import React from 'react';

const LeftHero = () => {
  return (
    <>
      <div className="left-hero-content md:w-[50%] mt-[10%] md:mt-0">
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


        <div className="bottom-hero mt-20 md:mt-[100px] sm:flex justify-between ">
          <div className="elementor-container  mb-5 md:mb-0">
            <div className="slide pb-0">
              <div className="s">
                <span className=" subtitle">find with me</span>
                <ul className=" flex gap-6 sm:gap-5 items-center skill-share ">
                  <li className="facebook">
                    <a href="#" title="facebook.Name">                                                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  </li>
                  <li className="facebook">
                    <a href="#" title="facebook.Name">                                                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  </li>
                  <li className="facebook">
                    <a href="#" title="facebook.Name">                                                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  </li>

                </ul>
              </div>
            </div>
            </div>
            <div className="">
            <div className="">
                <span className="subtitle">best skill on</span>
                <ul className=" skill-share flex gap-5  items-center">
                  <li className="invision  ">
                  <Image loading="lazy" decoding="async" width={24} height={24} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-01.png" className="attachment-full " alt="invision" />                                                                                                    </li>
                  <li className="sketch  ">
                    <Image loading="lazy" decoding="async" width={24} height={24} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-02.png" className="attachment-full " alt="icons-02" />                                                                                                    </li>
                  <li className="figma  size-6">
                    <Image loading="lazy" decoding="async" width={24} height={24} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-03.png" className="attachment-full " alt="figma" />                                                                                    </li>
                </ul>
             
            </div>
            </div>
          </div>

        </div>
      
    </>
  );
};

export default LeftHero;