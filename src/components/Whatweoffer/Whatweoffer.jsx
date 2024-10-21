import React from 'react';
import { motion } from 'framer-motion';

const ServiceIllustration = ({ type }) => {
  const illustrations = {
    web: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="40" y="30" width="120" height="140" rx="4" strokeWidth="2"/>
        <rect x="50" y="40" width="100" height="60" rx="2"/>
        <rect x="50" y="110" width="40" height="8" rx="2"/>
        <rect x="50" y="125" width="100" height="4" rx="1"/>
        <rect x="50" y="135" width="100" height="4" rx="1"/>
        <rect x="50" y="145" width="60" height="4" rx="1"/>
        <circle cx="170" cy="100" r="20" className="animate-pulse" fillOpacity="0.2" fill="white"/>
      </svg>
    ),
    erp: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="30" y="40" width="60" height="120" rx="4"/>
        <rect x="110" y="40" width="60" height="120" rx="4"/>
        <path d="M60 80 L140 80" strokeDasharray="4 4"/>
        <path d="M60 120 L140 120" strokeDasharray="4 4"/>
        <circle cx="60" cy="60" r="10"/>
        <circle cx="140" cy="100" r="10"/>
        <rect x="40" y="140" width="40" height="10" rx="2"/>
        <rect x="120" y="60" width="40" height="10" rx="2"/>
      </svg>
    ),
    brand: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="100" cy="100" r="60"/>
        <path d="M70 100 C70 80, 130 80, 130 100" strokeWidth="2"/>
        <path d="M70 120 C70 140, 130 140, 130 120" strokeWidth="2"/>
        <circle cx="85" cy="90" r="5"/>
        <circle cx="115" cy="90" r="5"/>
        <path d="M60 60 L140 140" className="animate-draw"/>
        <path d="M140 60 L60 140" className="animate-draw"/>
      </svg>
    ),
    logo: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="100" cy="100" r="40"/>
        <path d="M80 100 L120 100" strokeWidth="3"/>
        <path d="M100 80 L100 120" strokeWidth="3"/>
        <circle cx="100" cy="100" r="60" strokeDasharray="20 20" className="animate-spin-slow"/>
        <rect x="70" y="70" width="60" height="60" rx="8" strokeDasharray="10 10"/>
      </svg>
    ),
    gst: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="40" y="40" width="120" height="120" rx="4"/>
        <text x="60" y="90" className="text-2xl" fill="white">GST</text>
        <path d="M60 100 L140 100" strokeWidth="2"/>
        <rect x="60" y="110" width="80" height="10" rx="2"/>
        <rect x="60" y="130" width="80" height="10" rx="2"/>
        <circle cx="160" cy="40" r="15" className="animate-pulse" fillOpacity="0.2" fill="white"/>
      </svg>
    ),
    tax: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M40 160 L100 40 L160 160 Z"/>
        <text x="90" y="140" className="text-2xl" fill="white">₹</text>
        <circle cx="100" cy="100" r="40" strokeDasharray="10 10"/>
        <path d="M70 120 L130 120" strokeWidth="2"/>
        <path d="M80 140 L120 140" strokeWidth="2"/>
      </svg>
    ),
    audit: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="50" y="30" width="100" height="140" rx="4"/>
        <path d="M70 60 L130 60" strokeWidth="2"/>
        <path d="M70 90 L130 90" strokeWidth="2"/>
        <path d="M70 120 L130 120" strokeWidth="2"/>
        <circle cx="60" cy="60" r="3" fill="white"/>
        <circle cx="60" cy="90" r="3" fill="white"/>
        <circle cx="60" cy="120" r="3" fill="white"/>
        <path d="M140 40 L160 60 L140 80" fill="none" className="animate-check"/>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M50 40 L150 40 L150 160 L50 160 C40 160 40 40 50 40" strokeWidth="2"/>
        <path d="M60 60 L140 60" strokeWidth="1"/>
        <path d="M60 80 L140 80" strokeWidth="1"/>
        <path d="M60 100 L140 100" strokeWidth="1"/>
        <path d="M60 120 L140 120" strokeWidth="1"/>
        <path d="M60 140 L140 140" strokeWidth="1"/>
        <rect x="70" y="30" width="60" height="20" rx="2" className="animate-pulse" fillOpacity="0.2" fill="white"/>
      </svg>
    ),
    marketing: (
      <svg viewBox="0 0 200 200" className="w-32 h-32 mb-4" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M40 160 L40 60 L80 100 L120 80 L160 120 L160 160 Z" fill="none"/>
        <circle cx="80" cy="100" r="4" fill="white"/>
        <circle cx="120" cy="80" r="4" fill="white"/>
        <circle cx="160" cy="120" r="4" fill="white"/>
        <path d="M40 140 L160 140" strokeDasharray="4 4"/>
        <path d="M40 120 L160 120" strokeDasharray="4 4"/>
        <path d="M40 100 L160 100" strokeDasharray="4 4"/>
        <path d="M40 80 L160 80" strokeDasharray="4 4"/>
        <circle cx="180" cy="40" r="15" className="animate-pulse" fillOpacity="0.2" fill="white"/>
      </svg>
    )
  };

  return illustrations[type] || null;
};

const WhatWeOffer = () => {
  const cards = [
    {
      id: 1,
      title: "Web developing",
      description: "Elevate your online presence with WizardHorizon's modern and user-centric web development solutions.",
      iconType: "web"
    },
    {
      id: 2,
      title: "ERP software developing",
      description: "Develop custom ERP software to streamline tax planning, compliance, and financial management for businesses",
      iconType: "erp"
    },
    {
      id: 3,
      title: "Brand making",
      description: "Build a powerful brand identity with WizardHorizon's strategic branding solutions, from concept to execution.",
      iconType: "brand"
    },
    {
      id: 4,
      title: "Logo Design",
      description: "Create a memorable brand image with WizardHorizon's innovative and custom logo design services.",
      iconType: "logo"
    },
    {
      id: 5,
      title: "GST Consulting",
      description: "Simplify compliance and maximize savings with expert GST consulting and tailored solutions from WizardHorizon.",
      iconType: "gst"
    },
    {
      id: 6,
      title: "Tax planning",
      description: "Optimize your finances and minimize liabilities with personalized, proactive tax planning solutions from WizardHorizon.",
      iconType: "tax"
    },
    {
      id: 7,
      title: "Internal Audit",
      description: "Enhance operational efficiency and ensure compliance with WizardHorizon's comprehensive internal audit services.",
      iconType: "audit"
    },
    {
      id: 8,
      title: "Book keeping",
      description: "Maintain accurate financial records with WizardHorizon's reliable and efficient bookkeeping services.",
      iconType: "book"
    },
    {
      id: 9,
      title: "Digital marketing",
      description: "Boost your brand's visibility and growth with WizardHorizon's result-driven digital marketing solutions.",
      iconType: "marketing"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced timing for faster entrance
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced duration for faster entrance
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto p-4 mt-20 sm:mt-14">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} // Adjusted duration for the title
          className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left"
        >
          What We Offer
        </motion.h1>

        <div className="flex flex-col items-center">
          <motion.div
            className="mt-4 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} // Adjusted duration for the subtitle
            viewport={{ once: false, margin: "-100px" }}
          >
            <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
              Comprehensive Solutions<br />
              Tailored to Your Needs
            </h1>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-black rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow h-80"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }} // Adjusted for faster entrance
                  className="flex justify-center items-center mb-4"
                >
                  <ServiceIllustration type={card.iconType} />
                </motion.div>
                <h3 className="font-Playfair text-white text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/80 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;