import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
    const Form = new FormData();
    Form.append('Email', formData.email);
    Form.append('Description', formData.message);
    Form.append('Date_Time', new Date().toLocaleString());

    try {
      await fetch(SCRIPT_URL, {
        mode: 'no-cors',
        method: 'POST',
        body: Form,
      });

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will catch up with you within 24 hours.'
      });
      setFormData({ email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to submit message.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61564983183570", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/wizardhorizon", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/wizard-horizon-19a698325", label: "Linkedin" },
    { icon: Twitter, href: "https://x.com/WizardHorizon", label: "Twitter" }
  ];

  return (
    <div id="Meetus" className="container mx-auto p-4 mt-20 sm:mt-14">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left mt-10 sm:mt-20"
        >
          MEET US
        </motion.h1>

        <div className="flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-2 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
          >
            <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black dark:text-gray-400 leading-tight">
              Ready to Transform<br />
              Your Business?
            </h1>
          </motion.div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black dark:bg-gray-900 rounded-3xl p-8 text-white"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  ></textarea>
                </motion.div>

                {status.message && (
                  <div className={`p-3 rounded-lg ${
                    status.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {status.message}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                <div className="pt-6">
                    <h3 className="text-sm sm:text-lg font-Montserrat font-extralight mb-4">Stay Connected with WizardHorizon</h3>
                    <div className="flex items-center space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                        >
                          <social.icon 
                            size={24} 
                            className="text-blue-400 hover:text-white" 
                          />
                          
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <p className=' mt-3 text-sm sm:text-lg font-Montserrat font-extraligth'>Follow us today and be a part of the WizardHorizon journey</p>
              </form>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="w-full h-64 rounded-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2706459577444!2d77.64614467585696!3d12.954525715250847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d612ec72ab%3A0xb9d426b4a5361982!2sWizardHorizon%20Business%20%26%20Finance%20solutions!5e0!3m2!1sen!2sin!4v1729113061862!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-black dark:bg-gray-900 rounded-3xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-gray-800 rounded-full group-hover:bg-purple-600 transition-colors duration-300">
                      <MapPin size={24} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <p className="group-hover:text-blue-400 transition-colors duration-300">
                      Indiranagar, Bangalore, Karnataka, India
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-gray-800 rounded-full group-hover:bg-purple-600 transition-colors duration-300">
                      <Phone size={24} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <p className="group-hover:text-blue-400 transition-colors duration-300">
                      +91 62386 63883
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-gray-800 rounded-full group-hover:bg-purple-600 transition-colors duration-300">
                      <Mail size={24} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <p className="group-hover:text-blue-400 transition-colors duration-300">
                      info@wizardhorizon.com
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;