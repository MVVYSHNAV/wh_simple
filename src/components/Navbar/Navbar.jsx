// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { slideUp } from '../../utility/animation';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleNavigation = (item) => {
    const isHashLink = item.path.startsWith('#');

    if (isHashLink) {
      if (location.pathname === '/') {
        // If on home page, scroll to section
        const element = document.getElementById(item.path.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page, navigate to home with hash
        navigate('/' + item.path);
      }
    } else {
      // For regular routes
      navigate(item.path);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '#whatwedo' },
    { name: 'Who We Are', path: '#whoweare' },
    { name: 'Contact', path: '#contact' },
   
  ];

  const isItemActive = (item) => {
    if (item.path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (item.path.startsWith('#')) {
      return location.hash === item.path;
    }
    return location.pathname === item.path;
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.header
        variants={slideUp(0)}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            variants={slideUp(0.5)}
            initial="hidden"
            animate="visible"
          >
            <Link to="/" className="block">
              <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                variants={slideUp(0.2 + index * 0.1)}
                initial="hidden"
                animate="visible"
                onClick={() => handleNavigation(item)}
                className={`text-sm font-medium transition-colors duration-200
                  ${isItemActive(item)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            className="absolute top-full left-0 right-0 overflow-hidden bg-black/90 backdrop-blur-sm md:hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`text-left p-2 text-sm font-medium transition-colors duration-200
                      ${isItemActive(item)
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Spacer for fixed header */}
      <div className="h-20" />
    </LazyMotion>
  );
};

export default Navbar;