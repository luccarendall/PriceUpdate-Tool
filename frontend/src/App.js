import React, { useState, useEffect } from 'react';
import api from './api';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [csvFile, setCsvFile] = useState(null);
  const [validateButtonDisabled, setValidateButtonDisabled] = useState(true);
  const [updateButtonDisabled, setUpdateButtonDisabled] = useState(true);

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCsvFile(file);
      setValidateButtonDisabled(false); // Habilita o botão "Verificar" quando um arquivo é selecionado
    }
  };

  const handleVerifyBtn = () => {
    console.log("Clicou em verificar")
  };

   const handleUpdateBtn = () => {
    console.log("Clicou em atualizar")
  };

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
      <input type="file" className="csv-input" accept=".csv" onChange={handleFileChange} />
      <br />
      <button onClick={handleVerifyBtn} disabled={validateButtonDisabled}>Validar</button>
      <button onClick={handleUpdateBtn} disabled={updateButtonDisabled}>Atualizar</button>
    </div>
  );
}

export default App;
