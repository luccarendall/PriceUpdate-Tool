const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

// função para selecionar todos os produtos
const getProducts = async () => {
  const results = await client.query("SELECT * FROM products;")
  return results[0]; // Se não colocar o índice ele vai retornar tb metadados, e não é o que a gente quer
}

module.exports = {
  getProducts,
}