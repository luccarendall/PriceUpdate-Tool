require("dotenv").config();

const express = require('express');
const app = express();
const db = require('./db');

const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// rota para listar os produtos cadastrados
app.get('/products', async (req, res) => {
  const results = await db.getProducts(); // precisa fazer a chamada da função fora pq é assíncrona. Depois manda no response
  res.json(results)
});

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));