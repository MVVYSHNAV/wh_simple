import React from 'react';
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const cards = [
    { id: 1, title: "Strategic Planning", description: "Develop comprehensive business strategies tailored to your goals" },
    { id: 2, title: "Digital Transformation", description: "Modernize your operations with cutting-edge digital solutions" },
    { id: 3, title: "Market Analysis", description: "In-depth market research and competitive analysis" },
    { id: 4, title: "Process Optimization", description: "Streamline operations for maximum efficiency" },
    { id: 5, title: "Innovation Consulting", description: "Drive innovation and stay ahead of industry trends" },
    { id: 6, title: "Business Growth", description: "Scale your business with sustainable growth strategies" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className='container mx-auto p-4 mt-20 sm:mt-14'>
      <div className='max-w-5xl mx-auto'>
        {/* Title - Left aligned */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className='text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left'
        >
          What We Offer
        </motion.h1>

        {/* Centered content */}
        <div className="flex flex-col items-center">
          <motion.div
            className="mt-4 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            
          >
            <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
              Comprehensive Solutions<br />
              Tailored to Your Needs
            </h1>
          </motion.div>

          <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-black rounded-2xl p-6 h-64 flex flex-col justify-center items-center text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-Playfair text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-white text-sm">{card.description}</p>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;