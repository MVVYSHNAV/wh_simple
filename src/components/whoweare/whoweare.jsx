import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <div className="container mx-auto px-4 mt-4 sm:mt-14">
      <div className="max-w-5xl mx-auto">
        {/* Title - Left aligned */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left"
        >
          Who We Are
        </motion.h1>

        {/* Centered content wrapper */}
        <div className="flex flex-col items-center">
          {/* Subheading - Centered */}
          <motion.div
            className="mt-4 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
              Your Trusted Partner in<br />
              Business Transformation
            </h1>
          </motion.div>

          {/* Paragraph - Centered */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-3xl text-gray-600 text-justify leading-relaxed font-semibold"
          >
            WizardHorizon is a business consulting firm, dedicated to helping
            companies innovate, grow, and succeed. With expertise across various
            industries, our team delivers personalized solutions to tackle your biggest
            challenges and turn them into opportunities. We are driven by a
            commitment to excellence, integrity, and lasting results.
          </motion.p>

          {/* Call to Action Section */}
            <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-black text-lg md:text-xl font-medium">
               To know more about us
            </h2>
            <motion.button
              className="bg-black hover:bg-slate-400 hover:text-black text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: false }}
            >
               Click Here
              </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
