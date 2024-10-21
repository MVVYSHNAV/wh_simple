import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle route changes and escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    setIsOpen(false);
    document.body.style.overflow = 'auto';
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleNavigation = (item) => {
    const isHashLink = item.path.startsWith('#');

    if (isHashLink) {
      if (location.pathname === '/') {
        const element = document.getElementById(item.path.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + item.path);
      }
    } else {
      navigate(item.path);
    }
    setIsOpen(false);
    document.body.style.overflow = 'auto';
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

  // Modern hamburger menu button
  const MenuButton = ({ isOpen, toggle }) => (
    <button
      onClick={toggle}
      className="relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 md:hidden"
      aria-expanded={isOpen}
      aria-label="Toggle navigation menu"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
        <motion.span
          className="w-full h-0.5 bg-white block"
          animate={{
            rotateZ: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-full h-0.5 bg-white block"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-full h-0.5 bg-white block"
          animate={{
            rotateZ: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-white/10"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="block relative z-50">
                <img src={Logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </Link>
            </motion.div>

            {/* Menu Button */}
            <MenuButton isOpen={isOpen} toggle={toggleMenu} />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200
                    ${isItemActive(item) 
                      ? 'text-white bg-white/10 rounded-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 rounded-lg'
                    }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="foverflow-hidden bg-black md:hidden transition-all duration-300"
                  style={{ top: '64px' }} // Matches header height
                >
                  <nav className="flex items-center justify-center h-full bg-black">
                    <motion.div 
                      className="flex flex-col items-center space-y-4 py-4"
                      variants={{
                        open: {
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.2,
                          },
                        },
                      }}
                      initial="closed"
                      animate="open"
                    >
                      {navItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          variants={{
                            closed: { opacity: 0, y: 20 },
                            open: { opacity: 1, y: 0 },
                          }}
                          onClick={() => handleNavigation(item)}
                          className={`relative group px-8 py-4 text-xl font-medium transition-all duration-200 rounded-lg
                            ${isItemActive(item)
                              ? 'text-white bg-white/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;