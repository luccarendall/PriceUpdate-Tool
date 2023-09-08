import React, { useState, useEffect } from 'react';
import api from './api';
import './App.css'

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
    <div>
      <h1>Sistema de Atualização de Preços</h1>
      <div className="products-container">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.code} - {product.name} - R$ {product.cost_price} - R$ {product.sales_price}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <button>Validar</button>
      <button>Atualizar</button>
    </div>
  );
}

export default App;
