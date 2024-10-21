import React from 'react';
import { motion, useInView } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const WhoWeAre = () => {
  // Helper animation variants
  const titleVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 mt-20 sm:mt-25">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <motion.h1
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-black text-2xl sm:text-4xl font-Playfair font-bold mb-12 text-left"
        >
          Who We Are
        </motion.h1>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center">
          {/* Subheading */}
          <motion.div
            className="mt-4 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="font-Montserrat font-extralight text-2xl sm:text-4xl md:text-5xl text-black leading-tight">
              Your Trusted Partner in<br />
              Business Transformation
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl text-gray-600 text-justify leading-relaxed font-semibold"
          >
            WizardHorizon is a business consulting firm, dedicated to helping companies 
            innovate, grow, and succeed. With expertise across various industries, our team 
            delivers personalized solutions to tackle your biggest challenges and turn them 
            into opportunities. We are driven by a commitment to excellence, integrity, and 
            lasting results.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 px-4"
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-black text-lg md:text-xl font-medium">
              To know more about us
            </h2>

            <NavLink to="/about">
              <motion.button
                className="bg-black hover:bg-slate-400 hover:text-black text-white font-bold px-6 py-2.5 rounded-full text-sm transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Learn more about WizardHorizon"
              >
                Click Here
              </motion.button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
