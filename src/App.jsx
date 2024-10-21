// App.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

// Enhanced ScrollToTop component with hash handling
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, wait for content to load and scroll to it
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Layout component
const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
  
    <main className="flex-grow">
      {children}
    </main>
  
  </div>
);

// Home page component
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="text-white">
      <Suspense fallback={<LoadingSpinner />}>
      <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="whatwedo">
          <Whatweoffer />
        </section>
        <section id="whoweare">
          <Whoweare />
        </section>
        <section id="ourvalue">
          <Ourvalue />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </Suspense>
    </div>
  );
};

// NotFound component
const NotFound = () => (
  <div className="text-center py-20 text-white">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/form"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Form />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;