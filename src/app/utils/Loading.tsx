"use client"
import { Atom } from "react-loading-indicators";

export default function LoadingAnimation() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Atom color="#32cd32" size="medium" text="" textColor="" />
      <p className="mt-4 uppercase text-sm">Welcome To ot the world</p>
    </div>
  )
}