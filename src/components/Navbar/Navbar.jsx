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
      className="bg-black "
    >
      <div className="container flex items-center justify-between py-2 md:py-4">
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
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 font-Montserrat text-white">
          <motion.a variants={slideUp(0.2)} initial="hidden" animate="visible" href="#home">Home</motion.a>
          <motion.a variants={slideUp(0.3)} initial="hidden" animate="visible" href="#ourservices">What We Do</motion.a>
          <motion.a variants={slideUp(0.4)} initial="hidden" animate="visible" href="#about">Who We Are</motion.a>
          <motion.a variants={slideUp(0.5)} initial="hidden" animate="visible" href="#contact">Contact</motion.a>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="absolute top-14 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden"
          >
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#ourservices" onClick={toggleMenu}>What We Do</a>
            <a href="#about" onClick={toggleMenu}>Who We Are</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;


// import React from 'react';
// import Logo from '../../assets/logo.png';
// import { motion } from 'framer-motion';
// import { slideUp } from '../../utility/animation';

// const Navbar = () => {
//   return (
//     <motion.div 
//       variants={slideUp(0)} 
//       initial="hidden" 
//       animate="visible" 
//       className="bg-black rounded-b-lg"
//     >
//       <div className="container flex items-center justify-between py-2 md:py-4">
//         <motion.a 
//           variants={slideUp(0.5)} 
//           initial="hidden" 
//           animate="visible" 
//           href="#home"
//         >
//           <img src={Logo} alt="Logo" className="w-12" />
//         </motion.a>
//         <nav className="flex space-x-12 font-Montserrat text-white">
//           <motion.a 
//             variants={slideUp(0.2)} 
//             initial="hidden" 
//             animate="visible" 
//             href="#home"
//           >
//             Home
//           </motion.a>
//           <motion.a 
//             variants={slideUp(0.3)} 
//             initial="hidden" 
//             animate="visible" 
//             href="#ourservices"
//           >
//             What We Do
//           </motion.a>
//           <motion.a 
//             variants={slideUp(0.4)} 
//             initial="hidden" 
//             animate="visible" 
//             href="#about"
//           >
//             Who We Are
//           </motion.a>
//           <motion.a 
//             variants={slideUp(0.5)} 
//             initial="hidden" 
//             animate="visible" 
//             href="#contact"
//           >
//             Contact
//           </motion.a>
//         </nav>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;
