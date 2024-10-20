import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { slideUp } from '../../utility/animation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Prevent background scrolling
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        variants={slideUp(0)}
        initial="hidden"
        animate="visible"
        className="bg-black"
      >
        <div className="container mx-auto flex items-center justify-between py-2 md:py-4">
          <motion.a
            variants={slideUp(0.5)}
            initial="hidden"
            animate="visible"
            href="#home"
          >
            <img src={Logo} alt="Logo" className="w-12" />
          </motion.a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-12 font-Montserrat text-white">
            {['Home', 'What We Do', 'Who We Are', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                variants={slideUp(0.2 + index * 0.1)}
                initial="hidden"
                animate="visible"
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="hover:text-gray-400"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="overflow-hidden bg-black md:hidden transition-all duration-300"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {['Home', 'What We Do', 'Who We Are', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                onClick={toggleMenu}
                className="text-white hover:text-gray-400"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
};

export default Navbar;
