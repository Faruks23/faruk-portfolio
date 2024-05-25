
// components/Card.js
export default function Card({ topic, index}: any) {
  return (
    <div data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration={`${index*500}`}
      data-aos-easing="ease-in-out" className=" what-i-do-card  h-[300px] p-4 md:w-[350px]">
      <div className="mb-4">
        <div className="h-16 w-16 mb-2 rounded-full  p-2 in-sd-1  flex justify-center items-center">
          {topic.icon}
        </div>
        <h2 className="text-2xl font-semibold mt-10">{topic.topic}</h2>
      </div>
      <p className="text-gray-400 mt-5   leading-7   text-pretty w-full">
        {topic.description}
      </p>
    </div>
  );
}
