import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import Whoweare from './components/whoweare/whoweare';
import Whatweoffer from './components/Whatweoffer/Whatweoffer';
import Ourvalue from './components/ourvalue/Ourvalue';
import Testimonials from './components/testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Form from './components/form/form';
import Footer from './components/Footer/Footer';
import About from './components/about/About';

const Main = () => {
  return (
    <div className='overflow-x-hidden text-white'> 
      <Navbar />
      <Hero />
      <Whoweare />
      <Whatweoffer />
      <Ourvalue />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
