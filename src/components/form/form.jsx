import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import { Outlet } from 'react-router-dom';

const Getform = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    domain: '',
    needs: '',
    description: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDateTime = new Date().toLocaleString();
    const newRow = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Domain: formData.domain,
      What_need: formData.needs,
      Description: formData.description,
      Date_Time: currentDateTime,
    };

    const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
    const Form = new FormData();
    for (const key in newRow) {
      Form.append(key, newRow[key]);
    }

    try {
      await fetch(SCRIPT_URL, {
        mode: 'no-cors',
        method: 'POST',
        body: Form,
      });

      setShowSuccessMessage(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        domain: '',
        needs: '',
        description: '',
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-4 sm:mt-14">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-black text-lg sm:text-4xl font-Playfair font-bold mb-12 text-left"
          >
            Get in Touch
          </motion.h1>

          {/* Centered content wrapper */}
          <div className="flex flex-col items-center">
            {/* Subheading */}
            <motion.div
              className="mt-4 sm:mt-10 mb-12 text-center max-w-xl sm:max-w-3xl px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="font-Montserrat font-extralight text-2xl sm:text-64 md:text-5xl text-black leading-tight">
                Together, We Create<br />
                the Future You Envision
              </h1>
            </motion.div>

            {/* Form Section */}
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              onSubmit={handleSubmit}
              className="w-full max-w-3xl space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Please enter your Name', name: 'name', type: 'text', placeholder: 'Jibin K Job' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'example@gmail.com' },
                  { label: 'Phone', name: 'phone', type: 'number', placeholder: '7305451111' },
                  { label: 'Domain', name: 'domain', type: 'text', placeholder: 'finance, IT, Graphic' },
                  { label: 'What You Need', name: 'needs', type: 'text', placeholder: 'logo, website, branding' },
                ].map((input) => (
                  <motion.div
                    key={input.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="block text-black font-Montserrat">{input.label}</label>
                    <input
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                      value={formData[input.name]}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-lg border border-gray-300 px-4 focus:outline-none focus:border-black transition-colors duration-300"
                      required={['name', 'email', 'phone', 'needs'].includes(input.name)}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-2"
              >
                <label className="block text-black font-Montserrat">Description</label>
                <textarea
                  name="description"
                  placeholder="Describe your needs"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full h-32 rounded-lg border border-gray-300 p-4 focus:outline-none focus:border-black transition-colors duration-300"
                />
              </motion.div>

              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.button
                  type="submit"
                  className="bg-black hover:bg-slate-400 hover:text-black text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>
            <AnimatePresence>
              {showSuccessMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 text-black border border-black rounded-lg text-center max-w-3xl flex items-center justify-between"
                >
                  <p className="text-lg font-medium">Form submitted successfully! We will catch up with you within 24 hours.</p>
                  <motion.button
                    onClick={() => setShowSuccessMessage(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-black hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
      <Outlet/>
    </>
  );
};

export default Getform;