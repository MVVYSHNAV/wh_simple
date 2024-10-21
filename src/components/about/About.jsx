import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import ImageCard from '../extra/imagecard';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import jibinimg from '../../assets/jibinimg.png';
import vyshnavimg from '../../assets/vyshnavimg.png';
import yaduimga from '../../assets/yaduimga.png';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Aboutus = () => {
  const teamMembers = [
    {
      name: "Jibin K Job",
      role: "FOUNDER",
      education: "Bachelor of Science in Electronics, Mathematics, and Computer Science",
      linkedin: "https://www.linkedin.com/in/jibinkjob170600",
      image: jibinimg
    },
    {
      name: "Vyshnav MV",
      role: "CEO",
      education: "Masters in Computer Application",
      linkedin: "https://www.linkedin.com/in/vyshnav-mv-b138b4191",
      image: vyshnavimg
    },
    {
      name: "Yadu Krishna",
      role: "CFO",
      education: "Bachelor of Commerce, CA Intermediate Qualified",
      linkedin: "https://www.linkedin.com/in/yadu-krishna-v",
      image: yaduimga
    }
  ];

  return (
    <div className="min-h-screen text-black">
      <Navbar hideDarkMode />
      
      {/* Hero Section with Staggered Text Animation */}
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-Playfair font-bold text-center mb-6"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About WizardHorizon
        </motion.h1>
        <motion.p 
          className="font-Montserrat font-extralight text-xl sm:text-3xl lg:text-4xl text-center text-black leading-tight"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Transforming businesses through <br className="hidden sm:block"/> innovative solutions and <br className="hidden sm:block"/>strategic thinking
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        {/* Welcome Section */}
        <AnimatedSection>
          <section>
            <h2 className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left">
              Welcome to WizardHorizon!
            </h2>
            <p className="max-w-3xl text-gray-600 text-justify leading-relaxed font-semibold">
              At WizardHorizon, we are dedicated to transforming the way businesses operate and thrive in the digital age. As a premier business consulting firm, we leverage our expertise to provide innovative solutions that drive growth and efficiency for our clients.
            </p>
          </section>
        </AnimatedSection>

        {/* Vision Section */}
        <AnimatedSection>
          <section>
            <h2 className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left">
              Our Vision
            </h2>
            <p className="max-w-3xl text-gray-600 text-justify leading-relaxed font-semibold">
              We envision a world where businesses are not just adapting to change but driving it. A world where technology and strategic thinking converge to create innovative solutions that enhance customer experiences, streamline operations, and fuel growth.
            </p>
          </section>
        </AnimatedSection>

        {/* Approach Section */}
        <AnimatedSection>
          <section>
            <h2 className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left">
              Our Approach
            </h2>
            <motion.div 
              className="bg-gray-900 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-gray-300 mb-4 font-Montserrat font-bold">
                We believe that success is a journey, not a destination. Our approach centers around:
              </p>
              <ul className="space-y-3 text-gray-300">
                {["Client-Centric Focus: Building long-term relationships based on trust and transparency",
                  "Agile Methodology: Delivering solutions quickly and adapting to changing needs",
                  "Data-Driven Decisions: Using insights and evidence to guide our strategies"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start font-Montserrat"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Team Section with Responsive Grid */}
        <AnimatedSection>
          <section>
            <h2 className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <ImageCard className="h-5/6  " imgSrc={member.image}>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-wide">
                      {member.name}
                    </h3>
                    <h2 className="text-sm sm:text-base md:text-lg text-gray-200 font-medium">
                      {member.role}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                      {member.education}
                    </p>
                    <motion.a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs sm:text-sm md:text-base text-blue-300 hover:text-blue-200 mt-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <OpenInNewIcon className="w-4 h-4" /> LinkedIn
                    </motion.a>
                  </ImageCard>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>

      <Footer bgColor="bg-gray-900" textC="white" />
    </div>
  );
};

export default Aboutus;