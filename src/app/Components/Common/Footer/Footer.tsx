// components/Footer.js
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Line from '../Line';

export default function Footer() {
  return (
    <>
    <Line></Line>
      <footer className=" text-[#c4cfde]  pb-10 mt-20">
        <div className="container mx-auto flex md:flex-row flex-col justify-center gap-5  md:gap-[150px] px-6 md:px-0 ">
          <div className="flex flex-col md: items-start md:w-[20%] justify-center  ">
            <Image
              src="/path-to-your-image.jpg" // replace with your image path
              alt="Profile Picture"
              width={50}
              height={50}
              className="rounded-full in-sd-1  p-10"
            />
           
            <div className="flex mt-6 gap-5 items-center ">
              <a target='_blank' href="https://web.facebook.com/faruksp.fk/" className="p-5 in-sd-1 rounded-full hover:bg-gray-700">
                <FaFacebookF />
              </a>
              <a href="#" className="p-5 in-sd-1   rounded-full hover:bg-gray-700">
                <FaTwitter />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/md-omar-faruk-3b89a3190/" className="p-5 in-sd-1   rounded-full hover:bg-gray-700">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 lg:gap-32 w-full md:w-[80%]  md:mt-0 mt-5 ">
            <div>
              <h3 className="text-green-600 font-bold mb-4">QUICK LINK</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover-underline-animation">About</a></li>
                <li><a href="#portfolio" className="hover-underline-animation">Portfolio</a></li>
                <li><a href="#service" className="hover-underline-animation">Services</a></li>
                <li><a href="#" className="hover-underline-animation">Blog</a></li>
                <li><a href="#contact" className="hover-underline-animation">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-600 font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover-underline-animation">Authentication</a></li>
                <li><a href="#" className="hover-underline-animation">System Status</a></li>
                <li><a href="#" className="hover-underline-animation">Terms of Service</a></li>
                <li><a href="#" className="hover-underline-animation">Pricing</a></li>
                <li><a href="#" className="hover-underline-animation">Over Right</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-600 font-bold mb-4">DEVELOPERS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover-underline-animation">Documentation</a></li>
                <li><a href="#" className="hover-underline-animation">Authentication</a></li>
                <li><a href="#" className="hover-underline-animation">API Reference</a></li>
                <li><a href="#" className="hover-underline-animation">Support</a></li>
                <li><a href="#" className="hover-underline-animation">Open Source</a></li>
              </ul>
            </div>
          </div>
        </div>
        <Line></Line>
        <div className="footer-btm mt-5">
          <h1 className=' text-center font-semibold'>© 2024. All rights reserved by Faruk</h1>
        </div>
      </footer>
    </>
  );
}
