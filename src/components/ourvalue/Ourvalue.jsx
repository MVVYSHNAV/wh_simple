import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      id: 4,
      src:logo1,
      title: "Logo samples",
      category: "solutions",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      src:logo2,
      title: "Logo samples",
      category: "solutions",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 9,
      src:logo3,
      title: "",
      category: "solutions",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 10,
      src:logo4,
      title: "",
      category: "solutions",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 11,
      src:logo5,
      title: "",
      category: "solutions",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 12,
      src:logo6,
      title: "",
      category: "solutions",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 13,
      src:logo7,
      title: "",
      category: "solutions",
      span: "md:col-span-1 md:row-span-1"
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
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
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
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`
                px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                ${category === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-102 ${item.span}`}
            onClick={() => setSelectedImage(item)}
          >
            <div className="aspect-w-16 aspect-h-12 w-full">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryView;