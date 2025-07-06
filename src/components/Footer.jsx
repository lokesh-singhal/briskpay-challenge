import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FooterLinks from './FooterLinks';
import SocialButtons from './SocialButtons';
import { ArrowUp } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  useEffect(() => {
    const toggleButton = () => {
      setShowTopButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleButton);
    return () => window.removeEventListener('scroll', toggleButton);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.footer
      ref={footerRef}
      className="bg-black text-white flex flex-col px-4 md:px-20 pt-24"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
    
      <motion.div
        className="text-center flex flex-col gap-4"
        variants={itemVariants}
      >
        <p className="text-sky-300 text-sm md:text-base">
          Unlock the Future of Payments:
        </p>
        <h1 className="text-3xl md:text-5xl font-medium">
          Start Sending Money, Saving Smart, and
        </h1>
        <h1 className="text-3xl md:text-5xl font-medium text-gray-400">
          Taking Control of Your Finances!
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 text-black bg-white rounded-4xl"
          >
            Learn more
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border-2 border-white rounded-4xl"
          >
            Get the app
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="w-full h-px bg-gray-700 my-20" variants={itemVariants} />

     
      <motion.div
        className="flex flex-col md:flex-row gap-12 md:gap-24"
        variants={itemVariants}
      >
       
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          <div className="text-3xl font-bold">BRISKPAY</div>
          <p className="text-sm md:text-base text-gray-300">
            Designed for the next generation, BriskPay makes managing your money effortless.
          </p>
        
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <SocialButtons />
          </motion.div>
        </div>

    
        <div className="w-full md:w-2/3">
          <FooterLinks />
        </div>
      </motion.div>

      <motion.div className="w-full h-px bg-gray-700 mt-20" variants={itemVariants} />

      {/* Bottom Legal */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center text-sm my-10 gap-2"
        variants={itemVariants}
      >
        <p>Privacy Policy / Terms</p>
        <p>All rights reserved ©️BriskPay 2025</p>
      </motion.div>

    
      {showTopButton && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 p-3 bg-sky-500 text-white rounded-full shadow-lg z-50"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </motion.footer>
  );
};

export default Footer;

