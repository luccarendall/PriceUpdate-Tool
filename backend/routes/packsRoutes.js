const express = require('express');
const db = require('../db');
const router = express.Router();

// rota para listar os pacotes cadastrados
router.get('/packs', async (req, res) => {
  const results = await db.getPacks();
  res.json(results)
});

module.exports = router;