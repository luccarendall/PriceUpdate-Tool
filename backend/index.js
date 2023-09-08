require("dotenv").config();

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes')

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use('/', routes.productsRoutes)
app.use('/', routes.packsRoutes)

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));