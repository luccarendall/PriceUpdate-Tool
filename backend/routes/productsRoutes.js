const express = require('express');
const db = require('../db');
const router = express.Router();
productSchema = require('../validation/productSchema')

const validationMiddleware = (request, response, next) => {
  const { error } = productSchema.validate(request.body)
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map(i => i.message).join(',');

    console.log("error", message);
    response.status(422).json({ error: message })
  }
}

// rota para listar os produtos cadastrados
router.get('/products', async (req, res) => {
  const results = await db.getProducts(); // precisa fazer a chamada da função fora pq é assíncrona. Depois manda no response
  res.json(results)
});

// rota para listar 1 produto especifico com base no código
router.get('/products/:code', async (req, res) => { // utilizo :id para que seja uma variável, definida de acordo com o comportamento do usuário
  const code = parseInt(req.params.code); // esse code vem como texto. uso o parseInt p transformar em número pq id é número.
  const results = await db.getProductByCode(code)
  res.json(results)
});

// rota de cadastro de novo produto
router.post('/products', validationMiddleware, async (req, res) => {
  const produto = req.body; // dados que o usuário vai enviar para cadastrar novo cliente. Os dados de cadastro vem no body da requisição
  await db.postProduct(produto);
  res.sendStatus(201); // 201 é o código http para cadastro realizado com sucesso
});

// rota para atualizar produto
router.patch('/products/:code', validationMiddleware, async (req, res) => {
const code = parseInt(req.params.code);
const product = req.body;

await db.updateProduct(code, product)
res.sendStatus(200);
});

module.exports = router;