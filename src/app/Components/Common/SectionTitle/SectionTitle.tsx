import React from 'react';

const SectionTitle = ({subtitle,title}:{subtitle:string,title:string}) => {
  return (
    <>
      <div className="section-title">
        <p className="subtitle sub-title dot">{ subtitle}</p>
        <h2 data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration='1000' className="title sec-title pb-1 ">
          <span className='hover-underline-animation'> {title}</span>
         
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;