import React from 'react';
import Heroimg1 from '../../assets/heroimg1.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        {/* Hero Image Section */}
        <motion.div
          className="w-full max-w-5xl mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <motion.img
              src={Heroimg1}
              alt="Team collaboration"
              className="w-full h-[600px] object-cover rounded-3xl"
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <motion.div
                className="absolute top-3/4 sm:top-96 left-8 md:left-12 max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2 className="text-white font-Playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Unleashing<br />
                  Innovation for a<br />
                  Dynamic Tomorrow
                </h2>
              </motion.div>
            </div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            className="flex justify-between items-center mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-black text-lg md:text-xl font-medium">
              Let's Build the Future Together
            </h2>
            <motion.button
              className="bg-black hover:bg-slate-400 hover:text-black text-white font-bold px-2 py-3 w-32 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: false }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Text Section */}
        <motion.div
          className="mt-16 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
            Empowering businesses with tailored strategies and cutting-edge technology.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
