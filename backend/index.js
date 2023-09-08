require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));