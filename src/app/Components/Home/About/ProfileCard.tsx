import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaStar, FaTwitter } from 'react-icons/fa';
// import profilePic from '../public/profile-pic.jpg'; // Use your actual image

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-center  ">
      <div  data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration='1000' className=" text-white rounded-lg p-5 md:px-8 md:flex md:space-x-8">
        <div className=" md:w-[25%] sd-1 ">
          <div className="mb-4 flex flex-col items-center p-4 in-sd-1 h-[250px]">
            <Image
              src={'/contact1.png'}
              alt="Profile Picture"
              className="rounded-lg h-full"
              width={300}
              height={350}
            
            />
          </div>
          <div className='p-5'>

        
            <h2 className="text-xl font-bold">Md.Omar Faruk</h2>
            <p className="text-gray-400">Full Stack Web Developer</p>
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
        </div>
        <div className=" w-full md:w-2/3  rounded-lg  md:pt-[100px]  relative ">
          
          <div className='  mt-10 md:mt-0 sd-1   md:p-8 p-4 md:h-[350px]'>
            <h3 className="text-xl font-bold mb-2 text-[#c4cfde]">Full Stack Web Developer</h3>

            <div className="flex items-center mb-2">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="w-5 h-5" />
                ))}
              </div>
            </div>
            <p className="text-[#c4cfde] mt-1">
              As a proficient web developer, I bring a comprehensive skill set that encompasses HTML, CSS, and JavaScript, laying a solid foundation for crafting engaging and visually appealing web experiences. With expertise in front-end frameworks like React.js and Next.js, I specialize in building dynamic and responsive user interfaces that elevate user engagement and satisfaction.
              My proficiency extends to the backend as well, where I excel in utilizing technologies like Express.js and Node.js to create robust server-side solutions. Leveraging MongoDB and Mongoose, I design efficient database schemas and implement seamless data management strategies, ensuring optimal performance and scalability for web applications.
            </p>
          </div>
           <div className="border-c absolute hidden md:block z-10 h-1 w-[33px] bg-black top-[60%] left-[-4%]"></div>
        </div>
      </div>
    </div>
  );
}
