'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { NextUIProvider } from "@nextui-org/react"

const NextUiProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    AOS.init(); 
  },[])
  return (
    <>
      <NextUIProvider>
      {children}
      </NextUIProvider>
      
    </>
  );
};

export default NextUiProvider;