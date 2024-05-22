"ue client"
import { motion } from "framer-motion"
import React, { useState } from 'react';
import SectionTitle from '../../Common/SectionTitle/SectionTitle';
import { AnimatePresence } from 'framer-motion';

const PortFolio = () => {

  const [selectedId, setSelectedId] = useState(null)


  return (
    <div className=' mt-20 md:mt-[100px]'>
      <div className="prot-title flex justify-center !text-center">
        <SectionTitle title='My Portfolio' subtitle='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
'></SectionTitle>
        
        <div className="grid ">
          {/* {items.map(item => (

            <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>


          ))} */}
{/* 
          <AnimatePresence>
            {selectedId && (
              <motion.div layoutId={selectedId}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.button onClick={() => setSelectedId(null)} />
              </motion.div>
            )}
          </AnimatePresence> */}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;