import React from 'react';

const products = [
  {
    title: 'Janelas Minimalistas',
    description: 'Design minimalista janelas e portas de correr – Transparência para arquitectura inovadora!',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Janelas de Alumínio',
    description: 'Este tipo de sistema contém uma vedação central, com ou sem ruptura de ponte térmica, cuja diversidade de soluções',
    image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80'
  },
  {
    title: 'Protecção Solar',
    description: 'Soluções eficientes para controle solar e conforto térmico',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Renovação',
    description: 'Modernização e atualização de sistemas existentes',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80'
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;