import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">CONSTRUÍMOS SONHOS</h1>
          <p className="text-xl md:text-2xl">Transformando espaços com soluções inovadoras em alumínio</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;