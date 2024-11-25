"use client";

import { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => { 
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();    
  }, []);

  return (
    <div className="bg-gray-100 p-10 m-10">
      <div className="max-w.fit mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products && products.length > 0 ? (
          products.map((product, index) => (

            <div key={index} className="bg-white rounded-xl shadow-lg p-5">
              
              <img              
                src={`/${product.imageUrl}`} 
                alt={`${product.Marca} image`} 
                className="h-[300px] w-full object-cover rounded-md" 
              />
              
              <div className="mt-4 text-center">
              
                <h2 className="text-lg font-bold">{product.Marca}</h2>
                <p className="text-gray-600 mt-2">{product.Descripcion}</p>
                <p className="text-green-500 font-semibold mt-4">{product.Precio}</p>
              </div>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full"></p>
        )}
      </div>
    </div>
    
  );
}

export default Products



