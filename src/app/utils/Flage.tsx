import React from 'react';

export default function Flag() {
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen bg-gray-900  ">
      <div className="relative w-[90px] h-[90px]">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-green-600"></div>
        {/* <div className="absolute top-0 left-0 w-0 h-0 border-l-[96px] border-l-transparent border-r-[192px] border-r-red-600 border-t-[128px] border-t-transparent border-b-[128px] border-b-transparent"></div> */}
      </div>
    </div>
  );
}
