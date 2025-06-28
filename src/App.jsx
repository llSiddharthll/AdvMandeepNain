import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header2 from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import GSTCompliance from './components/GSTCompliance';
import ScrollToTop from './components/ScrollToTop';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Loader from './components/Loader';



function PageWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setLoading(true);
    setShowLoader(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLoader(false), 500); // wait for fade-out animation
    }, 1000); // simulate page load duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {showLoader && <Loader isVisible={loading} />}
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gst-compliance" element={<GSTCompliance />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageWrapper />
    </Router>
  );
}
