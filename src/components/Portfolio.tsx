import React from 'react';

const projects = [
  {
    name: 'Edifício Comercial Lisboa',
    location: 'Lisboa',
    image: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80'
  },
  {
    name: 'Residencial Porto',
    location: 'Porto',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80'
  },
  {
    name: 'Hotel Algarve',
    location: 'Faro',
    image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80'
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="h-80 relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p>{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;