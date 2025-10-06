import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className='flex justify-between gap-5 bg-gray-100 rounded-b-md p-5 m-10'>
      {/* Left Side Text */}
      <div>
        <motion.h1
          className='text-6xl font-bold'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Design your <span className='text-amber-500'>Dream</span> <br />
          <span className='text-amber-500'>House</span> with us
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Discover elegant home decor collections that bring warmth and <br /> beauty
          to every space. Every corner tells a story — make yours unforgettable.
        </motion.p>

        <motion.button
          className="bg-amber-500 mt-5 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <img
          className='w-full max-w-[500px] h-[300px] rounded-lg shadow-lg object-cover'
          src="https://i.ibb.co.com/20QRdypg/home-decor.jpg"
          alt="Home Decor"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
