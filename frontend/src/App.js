// src/App.js
import React, { useState, useEffect } from 'react';
import api from './api'; // Importe a instância do Axios configurada

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Faça a chamada GET à API quando o componente for montado
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
