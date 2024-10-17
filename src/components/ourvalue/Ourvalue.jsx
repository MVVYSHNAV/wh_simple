import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {slideVariants } from '../../utility/animation'


const ValueProposition = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Innovative Solutions",
      description: "Delivering cutting-edge strategies that drive real business growth",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Measurable Impact",
      description: "Creating tangible results that enhance your bottom line",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Sustainable Growth",
      description: "Building long-term success through strategic planning",
      image: "/api/placeholder/800/400"
    }
  ];


  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + cards.length) % cards.length;
    setCurrentIndex(newIndex);
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
          Our Value Proposition
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
              We Deliver Results<br />
              That Matter
            </h1>
          </motion.div>

          {/* Carousel Section */}
          <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-2xl">
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
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                  <img
                    src={cards[currentIndex].image}
                    alt={cards[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="text-2xl font-bold mb-2">{cards[currentIndex].title}</h3>
                    <p className="text-lg">{cards[currentIndex].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              onClick={() => paginate(-1)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
              onClick={() => paginate(1)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
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

export default ValueProposition;