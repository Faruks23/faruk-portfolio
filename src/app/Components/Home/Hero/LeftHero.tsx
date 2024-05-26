import AnimatedText from '@/app/utils/AnimatText';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGit, FaGithub } from 'react-icons/fa';
const LeftHero = () => {
  return (
    <>
      <div className="left-hero-content md:w-[50%] mt-[10%] md:mt-0">
        <AnimatedText></AnimatedText>


        <div className="bottom-hero mt-[90px] md:mt-[100px] sm:flex justify-between gap-2 lg:gap-0  ">
          <div className="mb-5 md:mb-0">
            <div className="slide pb-0">
              <div className="s">
                <span data-aos="fade-in"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration='1000' className=" subtitle">find with me</span>
                <ul className=" flex lg:gap-6 sm:gap-2 items-center skill-share ">
                  <li data-aos="zoom-in"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration='1000' className="facebook">
                    <a target='_blank' href="https://web.facebook.com/faruksp.fk/"    title="facebook">                                                                             <FaFacebookF className=' w-6 h-6'></FaFacebookF>
                      </a>
                  </li>
                  <li data-aos="zoom-in"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration='1500' className="Linkedin">
                    <a target='_blank' href="https://www.linkedin.com/in/md-omar-faruk-3b89a3190/"
                      title="Linkedin">                                                                             <FaLinkedinIn className=' w-6 h-6'></FaLinkedinIn>
                      </a>
                  </li>
                  <li data-aos="zoom-in"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration='2000' className="GitHub">
                    <a href="https://github.com/Faruks23" title="GitHub">                                                              <FaGithub className=' w-6 h-6'></FaGithub></a>
                  </li>

                </ul>
              </div>
            </div>
            </div>
            <div className="">
            <div className="">
              <span data-aos="fade-in"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration='1000' className="subtitle">best skill on</span>
                <ul className=" skill-share flex gap-2 lg:gap-5  items-center">
                <li data-aos="zoom-in"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration='1000' className="invision  ">
                  <Image loading="lazy" decoding="async" width={24} height={24} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-01.png" className="attachment-full " alt="invision" />                                                                                                    </li>
                <li data-aos="zoom-in"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration='1500' className="sketch  ">
                    <Image loading="lazy" decoding="async" width={24} height={24} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-02.png" className="attachment-full " alt="icons-02" />                                                                                                    </li>
                <li data-aos="zoom-in"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration='2000' className="figma  size-6">
                    <Image loading="lazy" decoding="async" width={24} height={24} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-03.png" className="attachment-full " alt="figma" />                                                                         </li>
                </ul>
             
            </div>
            </div>
          </div>

        </div>
      
    </>
  );
};

export default LeftHero;