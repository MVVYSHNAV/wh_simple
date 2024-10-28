import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import festivial1 from '../../assets/festive/WH_diwali_poster.png'
import festivial2 from '../../assets/festive/diwalipicvj2.png'
import festivial3 from '../../assets/festive/cso_diwali_poster.png'
import festivial4 from '../../assets/festive/onam1.jpeg'
import festivial5 from '../../assets/festive/onam2.jpeg'
import festivial6 from '../../assets/festive/onam3.jpeg'
import logo1 from '../../assets/LOGO/logo1.jpeg'
import logo2 from '../../assets/LOGO/logo2.jpeg'
import logo3 from '../../assets/LOGO/logo3.jpeg'
import logo4 from '../../assets/LOGO/logo4.jpeg'
import logo5 from '../../assets/LOGO/logo5.jpeg'
import logo6 from '../../assets/LOGO/logo6.jpeg'
import logo7 from '../../assets/LOGO/logo7.jpeg'



const GalleryView = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory] = useState('all');
  

  const galleryItems = [
    {
      id: 1,
      src:festivial1,
      title: "DIWALI",
      category: "celebration",
      span: "col-span-2 row-span-1"
    },
    {
      id: 2,
      src:festivial2,
      title: "DIWALI",
      category: "celebration",
      span: "col-span-1 row-span-1"
    },
    {
      id: 3,
      src:festivial3,
      title: "Diwali poster",
      category: "celebration",
      span: "col-span-1 row-span-1"
    },
    {
      id: 4,
      src:logo1,
      title: "Logo samples",
      category: "solutions",
      span: "col-span-1 row-span-1"
    },
    {
      id: 5,
      src:logo2,
      title: "Logo samples",
      category: "solutions",
      span: "col-span-1 row-span-1"
    },
    {
      id: 6,
      src:festivial4,
      title: "Happy Independence day",
      category: "celebration",
      span: "col-span-1 row-span-1"
    },
    {
      id: 7,
      src:festivial5,
      title: "Onam Poster",
      category: "celebration",
      span: "col-span-1 row-span-1"
    },
    {
      id: 8,
      src:festivial6,
      title: "Onam Poster",
      category: "celebration",
      span: "col-span-2 row-span-2"
    },
    {
      id: 9,
      src:logo3,
      title: "",
      category: "solutions",
      span: "col-span-1 row-span-1"
    },
    {
      id: 10,
      src:logo4,
      title: "",
      category: "solutions",
      span: "col-span-1 row-span-1"
    },
    {
      id: 11,
      src:logo5,
      title: "",
      category: "solutions",
      span: "col-span-2 row-span-1"
    },
    {
      id: 12,
      src:logo6,
      title: "",
      category: "solutions",
      span: "col-span-2 row-span-1"
    },
    {
      id: 13,
      src:logo7,
      title: "",
      category: "solutions",
      span: "col-span-1 row-span-1"
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'solutions', label: 'Mockup' },
    { id: 'logo', label: 'Logos' },
    { id: 'celebration', label: 'Celebration' }
  ];

  const filteredItems = galleryItems.filter(item => 
    category === 'all' || item.category === category
  );

  return (
    <div className="container mx-auto px-4 mt-20 sm:mt-25">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-black text-2xl sm:text-4xl font-Playfair font-bold mb-12 text-left mt-10 sm:mt-20" 
        >
          Our Value Proposition
        </motion.h1>
        <div className="flex flex-col items-center">
        <motion.div
            className="mt-4 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className=" font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
            We Deliver Results <br/> That Matter
            </h1>
          </motion.div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                category === cat.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-min"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`relative cursor-pointer group ${item.span}`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryView;