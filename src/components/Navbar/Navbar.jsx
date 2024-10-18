import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { motion } from 'framer-motion';
import { slideUp } from '../../utility/animation';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          <img href='/' src={Logo} alt="Logo" className="w-12" />
        </motion.a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 font-Montserrat text-white">
          <motion.a
            variants={slideUp(0.2)}
            initial="hidden"
            animate="visible"
            href="#home"
          >
            Home
          </motion.a>
          <motion.a
            variants={slideUp(0.3)}
            initial="hidden"
            animate="visible"
            href="#ourservices"
          >
            What We Do
          </motion.a>
          <motion.a
            variants={slideUp(0.4)}
            initial="hidden"
            animate="visible"
            href="#about"
          >
            Who We Are
          </motion.a>
          <motion.a
            variants={slideUp(0.5)}
            initial="hidden"
            animate="visible"
            href="#contact"
          >
            Contact
          </motion.a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className={`overflow-hidden bg-black md:hidden transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="/#home" onClick={toggleMenu} className="text-white">
            Home
          </a>
          <a href="/#ourservices" onClick={toggleMenu} className="text-white">
            What We Do
          </a>
          <a href="/#about" onClick={toggleMenu} className="text-white">
            Who We Are
          </a>
          <a href="/#contact" onClick={toggleMenu} className="text-white">
            Contact
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
