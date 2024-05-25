'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

import Image from 'next/image';

import { BsSendArrowUp } from "react-icons/bs";
import { Spinner } from '@nextui-org/react';
export default function ContactForm() {

  const form = useRef<any>();
  const [loading,setLoading]=useState<boolean>(false)

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    if (form) {
      emailjs
        .sendForm('service_mylb975', 'template_uj6cjzd', form.current, {
          publicKey: 'kL923bdIx39RPOJeY',
        })
        .then(
          () => {
            toast.success('Successfully Sended')
            setLoading(false);
          },
          (error) => {
          
            toast.error('FAILED...', error.text)
          },
        );
     }
  };
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration='1000' className="min-h-screen flex items-center justify-center ">
        <div className=" text-white rounded-lg  md:flex space-x-8 w-full px-5 md:px0">
          <div className=" md:w-1/3 sd-1">
            <div className="  in-sd-1 p-6 rounded-lg mb-4">
              <Image
                src={'/contact1.png'}
                alt="Profile Picture"
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
            <div className='p-5 md:p-4'>
              <h2 className="text-xl font-bold">Md.Faruk</h2>
              <p className="text-gray-400">Full Stack Developer</p>
              <p className="mt-2">I am available for freelance work. Connect with me via and call in to my account.</p>
              <div className="mt-4">
                <p>Phone: <a href="tel:+8801617549583" className="text-blue-400">+8801617549583</a></p>
                <p>Email: <a href="mailto:mdfaruksp2@gmail.com" className="text-blue-400">mdfaruksp2@gmail.com</a></p>
              </div>
            </div>

          </div>
          <div className=" w-full md:w-[66.666667%]  md:p-6 rounded-lg ml-0  mt-10 md:mt-0 sd-1 p-3 ">
            <form ref={form} onSubmit={sendEmail}>
              <div className=' flex items-center gap-4 '>
                <div className="mb-4 w-[50%]">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full p-3  bg-[#191b1e]  in-sd-1 rounded-lg focus:outline-none"
                    id="name"
                    type="text"
                    name='user_name'
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 bg-[#191b1e]  in-sd-1  rounded-lg focus:outline-none"
                    id="phone"
                    type="number"
                    name='user_phone'
                    required
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 bg-[#191b1e]  in-sd-1  rounded-lg focus:outline-none"
                  id="email"
                  name='user_email'
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full p-3 bg-[#191b1e]  in-sd-1  rounded-lg focus:outline-none"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  name='user_subject'
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-3 py-5 bg-[#191b1e]  in-sd-1  rounded-lg focus:outline-none"
                  id="message"
                  name='message'
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  className="w-[200px]  in-sd-1  py-3 px-2 rounded-lg hover:bg-[#191b1e] duration-200  focus:outline-none flex items-center gap-3"
                  type="submit"
                >
                  <BsSendArrowUp className=' w-8 h-8 p-2  in-sd-1 text-green-600' />  <span className='  items-center'>

                    {loading ? <Spinner className='ml-8' color="success" /> : "Send Message"}

                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
