import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Menu onAddToCart={handleAddToCart} />
      <About />
      <Testimonials />
      <Footer />
      <Analytics/>
    </div>
  );
}