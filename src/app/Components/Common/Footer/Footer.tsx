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
            <span className="mt-2">INBIO</span>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="p-5 in-sd-1 rounded-full hover:bg-gray-700">
                <FaFacebookF />
              </a>
              <a href="#" className="p-5 in-sd-1   rounded-full hover:bg-gray-700">
                <FaTwitter />
              </a>
              <a href="#" className="p-5 in-sd-1   rounded-full hover:bg-gray-700">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 md:gap-32 w-full md:w-[80%]  md:mt-0 ">
            <div>
              <h3 className="text-green-600 font-bold mb-4">QUICK LINK</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-600 font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Authentication</a></li>
                <li><a href="#" className="hover:underline">System Status</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Over Right</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-600 font-bold mb-4">DEVELOPERS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Documentation</a></li>
                <li><a href="#" className="hover:underline">Authentication</a></li>
                <li><a href="#" className="hover:underline">API Reference</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">Open Source</a></li>
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
