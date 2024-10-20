import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero/hero'));
const Whoweare = lazy(() => import('./components/whoweare/whoweare'));
const Whatweoffer = lazy(() => import('./components/Whatweoffer/Whatweoffer'));
const Ourvalue = lazy(() => import('./components/Ourvalue/Ourvalue'));
const Testimonials = lazy(() => import('./components/testimonial/Testimonial'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Form = lazy(() => import('./components/form/form'));
const About = lazy(() => import('./components/about/About'));

// Scroll to top on route change
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

const Main = () => (
  <div className='overflow-x-hidden text-white'>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Whoweare />
      <Whatweoffer />
      <Ourvalue />
      <Testimonials />
      <Contact />
    </Suspense>
    <Footer />
  </div>
);

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl">404 - Page Not Found</h1>
    <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/form" element={<Suspense fallback={<div>Loading...</div>}><Form /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
