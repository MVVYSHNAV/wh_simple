import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import jib1 from '../../assets/jibinimg.png';
import vysh1 from '../../assets/vyshnavimg.png';
import yadu1 from '../../assets/yaduimga.png';
import { Outlet } from 'react-router-dom';

// Enhanced ImageCard component with animations
const AnimatedImageCard = ({ imgSrc, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative group w-64 bg-gray-900 rounded-lg overflow-hidden shadow-xl"
    >
      <motion.div
        className="relative h-64 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imgSrc}
          alt="Team member"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      </motion.div>
      <motion.div
        className="p-4 relative z-10 bg-gray-900 transform transition-transform duration-300"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Aboutus = () => {
  // Animation variants for text sections
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Animation variants for section headers
  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen sm:bg-gradient-to-b sm:from-gray-900 sm:to-gray-800">
      <Navbar/>
      
      <div className="container mx-auto px-5 md:px-52 py-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <motion.h1 
            variants={headerVariants}
            className="text-3xl font-BebasNeue"
          >
            About Us
          </motion.h1>
        </motion.div>

        {/* Welcome Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <motion.h3 
            variants={headerVariants}
            className="text-xl font-BebasNeue"
          >
            Welcome to WizardHorizon!
          </motion.h3>
          <motion.p 
            variants={textVariants}
            className="text-lg mt-4 font-regular font-Roboto text-white text-justify"
          >
            At WizardHorizon, we are dedicated to transforming the way businesses operate and thrive in the digital age. As a premier business consulting firm, we leverage our expertise to provide innovative solutions that drive growth and efficiency for our clients.
          </motion.p>
        </motion.div>

        {/* Our Story Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10"
        >
          <motion.h3 
            variants={headerVariants}
            className="text-xl font-BebasNeue"
          >
            Our Story
          </motion.h3>
          <motion.p 
            variants={textVariants}
            className="text-lg mt-4 font-regular font-Roboto text-white text-justify"
          >
            Founded on the principles of innovation, integrity, and impact, WizardHorizon was established to bridge the gap between business strategy and technology. Our founders, seasoned experts in business consulting and IT services, recognized the need for a holistic approach that integrates technology with business strategy to drive meaningful results.
          </motion.p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h1 className="text-white text-center text-3xl font-BebasNeue mb-10">
            " Our Team "
          </h1>
          <div className="flex flex-wrap justify-center gap-8 p-4">
            <AnimatedImageCard imgSrc={jib1}>
              <h3 className="text-lg md:text-xl font-BebasNeue">Jibin K Job</h3>
              <h2 className="text-sm md:text-lg font-semibold text-gray-200">FOUNDER</h2>
              <p className="text-xs md:text-sm mb-2">Bachelor of Science in Electronics, Mathematics, and Computer Science</p>
              <motion.a 
                href="https://www.linkedin.com/in/jibinkjob170600" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <OpenInNewIcon className="text-sm" /> LinkedIn */}
              </motion.a>
            </AnimatedImageCard>

            <AnimatedImageCard imgSrc={vysh1}>
              <h3 className="text-lg md:text-xl font-BebasNeue">Vyshnav MV</h3>
              <h2 className="text-sm md:text-lg font-semibold text-gray-200">CEO</h2>
              <p className="text-xs md:text-sm mb-2">Masters in Computer Application</p>
              <motion.a 
                href="https://www.linkedin.com/in/vyshnav-mv-b138b4191" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <OpenInNewIcon className="text-sm" /> LinkedIn */}
              </motion.a>
            </AnimatedImageCard>

            <AnimatedImageCard imgSrc={yadu1}>
              <h3 className="text-lg md:text-xl font-BebasNeue">Yadu Krishna</h3>
              <h2 className="text-sm md:text-lg font-semibold text-gray-200">CFO</h2>
              <p className="text-xs md:text-sm mb-2">Bachelor of Commerce, CA Intermediate Qualified</p>
              <motion.a 
                href="https://www.linkedin.com/in/yadu-krishna-v" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* <OpenInNewIcon className="text-sm" /> LinkedIn */}
              </motion.a>
            </AnimatedImageCard>
          </div>
        </motion.div>
      </div>
      <Outlet/>
      <Footer bgColor="bg-gray-800" textC="white" />
    </div>
  );
};

export default Aboutus;