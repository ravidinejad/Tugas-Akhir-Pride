import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vector from '../Assets/Vector 2.png'

const Card = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

        const config = {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        };

        const response = await axios.get('http://localhost:2910/products', config);
        const productData = response.data;
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col px-6 py-6 font-medium bg-white max-w-[217px]">
    
         
            {products.map((product, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                  className="w-36 max-w-full aspect-[1.0]"
                />
                <div className="mt-6 text-xs text-black">{product.name}</div>
                <div className="mt-2 text-sm text-blue-700">IDR {product.price}</div>
              </div>
            ))}
      
          <img
            loading="lazy"
            src={Vector}
            className="self-end aspect-[0.68] fill-orange-500 w-[17px]"
          />
        
    </div>
  );
};

export default Card;
