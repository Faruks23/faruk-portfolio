import React from 'react';
import ContactForm from './ContactForm';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';

const Contact = () => {
  return (
    <div id='contact' className=" my-10">
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle
          title=" Contact With Me"
          subtitle="CONTACT"
        ></SectionTitle>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;