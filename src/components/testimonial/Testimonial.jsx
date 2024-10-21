import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {slideVariants } from '../../utility/animation'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "WizardHorizon transformed our business operations, and we saw a 30% increase in efficiency within months.",
      author: "Sarah Johnson",
      position: "CEO, Tech Solutions Inc."
    },
    {
      id: 2,
      quote: "Their strategic guidance helped us navigate complex challenges and achieve remarkable growth.",
      author: "Michael Chen",
      position: "Director, Global Innovations"
    },
    {
      id: 3,
      quote: "The expertise and dedication of the WizardHorizon team exceeded our expectations.",
      author: "Emma Williams",
      position: "COO, Future Dynamics"
    }
  ];


  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='container mx-auto p-4 mt-20 sm:mt-25'>
      <div className='max-w-5xl mx-auto'>
        {/* Title - Left aligned */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className='text-black text-2xl sm:text-4xl font-Playfair font-bold mb-12 text-left'
        >
          Testimonials
        </motion.h1>

        {/* Centered content */}
        <div className="flex flex-col items-center">
          <motion.div
            className="mt-2 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
              Our Success is<br />
              Defined by Yours
            </h1>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative w-full max-w-3xl overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="relative"
              >
                <div className="bg-black rounded-[40px] p-8 sm:p-12 text-white text-center relative overflow-hidden">
                  {/* Blue border effect */}
                  <div className="absolute inset-0 rounded-[40px] border-2 border-blue-400 opacity-50"></div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg sm:text-2xl mb-6 font-light leading-relaxed"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base"
                  >
                    <p className="font-semibold">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-400">{testimonials[currentIndex].position}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              onClick={() => paginate(-1)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              onClick={() => paginate(1)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;