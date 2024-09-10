
export default function AnimatedText() {

  return (
    <>
      <p data-aos="fade-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration='1000' className="subtitle text-2xl font-light mb-4">WELCOME TO MY WORLD</p>
      <h1 data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration='500' className="title text-4xl font-bold ">
        Hi, I’m <span className="text-green-500 lg:ml-4">Md.Faruk</span>
        <br />      
      </h1>
      <h1 data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration='1000'  className="text-4xl  font-bold mb-6">a Developer </h1>
      <p data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration='1500' className="description text-lg font-light text-justify">
        <span>
          I am a passionate web developer with expertise in creating dynamic and responsive websites using modern web technologies. With a focus on clean code, user-friendly design, and performance optimization, I transform ideas into engaging digital experiences. My skills include HTML, CSS, JavaScript, React, and Node.js, enabling me to build everything from sleek single-page applications to complex web platforms. I thrive on problem-solving and continuously learning new tools and technologies to stay ahead in this ever-evolving field.
        </span>
      </p>
    </>
  );
}
