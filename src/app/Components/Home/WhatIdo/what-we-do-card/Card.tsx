import Image from "next/image";

// components/Card.js
export default function Card({topic}:any) {
  return (
    <div className=" what-i-do-card  h-[350px] p-4 md:w-[350px]">
      <div className="mb-4">
        <div className="h-16 w-16 mb-2 rounded-full  p-2 in-sd-1  flex justify-center items-center">
          {topic.icon}
        </div>
        <h2 className="text-2xl font-semibold mt-10">{ topic.topic}</h2>
      </div>
      <p className="text-gray-400 mt-5   leading-7   text-pretty w-full">
        {topic.description}
      </p>
    </div>
  );
}
