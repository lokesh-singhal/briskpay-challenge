import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CardFlip from './FlipCard';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
};

const Section5 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="relative px-4 md:mx-36 my-20 flex flex-col gap-12"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
     
      <motion.div
        variants={itemVariants}
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <p className="text-sky-300 text-sm md:text-base">Get your card</p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Elevate Your Payment Experience
        </h1>
      </motion.div>

  
      <motion.div variants={itemVariants}>
        <CardFlip />
      </motion.div>

     
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 justify-between"
      >
        <p className="w-full md:w-[70%] text-sm md:text-base">
          We offer a range of physical cards designed to fit your lifestyle. Whether you're
          looking for a basic option for everyday purchases or a premium card with exclusive
          perks, we've got you covered.
        </p>

        
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="px-6 py-3 text-white bg-black rounded-4xl self-start md:self-auto"
        >
          Get the card
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Section5;
