import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Portfolio />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;