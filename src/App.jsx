import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Header2 from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import GSTCompliance from './components/GSTCompliance';
import ScrollToTop from './components/ScrollToTop';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header2/>
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
    </Router>
  );
}

export default App;
