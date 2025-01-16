import React from 'react';

const Partners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nossos Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Replace with actual partner logos */}
          {[1, 2, 3, 4, 5, 6, 8].map((_, index) => (
            <div key={index} className="w-40 h-20 bg-white rounded-lg shadow flex items-center justify-center">
              <div className="text-gray-400">Logo {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;