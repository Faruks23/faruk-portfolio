"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { FC, ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const SmoothScrollWrapper: FC<PropsType> = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });

  return (
    <ReactLenis className="" root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollWrapper;
