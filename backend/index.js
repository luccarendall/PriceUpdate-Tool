require("dotenv").config();

const express = require('express');
const app = express();
// const db = require('./db');
const routes = require('./routes/productsRoutes')

app.use(express.json());
app.use('/', routes)

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));