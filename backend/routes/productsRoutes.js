const express = require('express');
const db = require('../db');
const router = express.Router();

// rota para listar os produtos cadastrados
router.get('/products', async (req, res) => {
  const results = await db.getProducts(); // precisa fazer a chamada da função fora pq é assíncrona. Depois manda no response
  res.json(results)
});

module.exports = router;