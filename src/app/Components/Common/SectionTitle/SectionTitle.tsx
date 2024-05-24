import React from 'react';

const SectionTitle = ({subtitle,title}:{subtitle:string,title:string}) => {
  return (
    <>
      <div className="section-title  aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
        <p className="subtitle sub-title dot">{ subtitle}</p>
        <h2 className="title sec-title ">{title}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;