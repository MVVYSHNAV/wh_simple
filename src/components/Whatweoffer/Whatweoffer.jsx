import React from 'react';
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const cards = [
    { id: 1, title: "Tax planning", description: "Optimize your finances and minimize liabilities with personalized, proactive tax planning solutions from WizardHorizon." },
    { id: 2, title: "ERP software developing", description: "Develop custom ERP software to streamline tax planning, compliance, and financial management for businesses" },
    { id: 3, title: "GST Consulting", description: "Simplify compliance and maximize savings with expert GST consulting and tailored solutions from WizardHorizon." },
    { id: 4, title: "Brand making", description: "Build a powerful brand identity with WizardHorizon’s strategic branding solutions, from concept to execution." },
    { id: 5, title: "Logo Design", description: "Create a memorable brand image with WizardHorizon’s innovative and custom logo design services." },
    { id: 6, title: "Web developing", description: "Elevate your online presence with WizardHorizon’s modern and user-centric web development solutions." },
    { id: 7, title: "Internal Audit", description: "Enhance operational efficiency and ensure compliance with WizardHorizon’s comprehensive internal audit services." },
    { id: 6, title: "Digital marketing", description: "Boost your brand’s visibility and growth with WizardHorizon’s result-driven digital marketing solutions." },
    { id: 6, title: "Book keeping", description: "Maintain accurate financial records with WizardHorizon’s reliable and efficient bookkeeping services." },
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