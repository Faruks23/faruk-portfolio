
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
        data-aos-duration='1500' className="description text-lg font-light">
        <span>
          I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
        </span>
      </p>
    </>
  );
}
