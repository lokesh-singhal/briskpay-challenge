import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContinentRows from './Continent';

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative px-4 md:mx-36 my-16" ref={ref}>
   
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full text-center flex flex-col gap-3"
      >
        <p className="text-sky-300 text-sm md:text-base">International Transfers</p>
        <h1 className="text-3xl md:text-5xl font-medium">Send Money Anywhere, Anytime</h1>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-10"
      >
        <ContinentRows />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="px-4 md:mx-32 mt-10 flex flex-col items-center gap-4 text-sm md:text-base"
      >
        <p className="text-center max-w-3xl">
          Sending money internationally is as easy as sending it across town. Whether you're helping family abroad, paying for a subscription, or supporting friends in different countries, our fast, secure international transfers make it effortless.
        </p>
        <button className="px-6 py-3 text-white bg-black rounded-4xl">
          Send Money
        </button>
      </motion.div>
    </section>
  );
};

export default Section4;
