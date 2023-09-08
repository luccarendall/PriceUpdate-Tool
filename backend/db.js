const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

// função para selecionar todos os produtos
const getProducts = async () => {
  const results = await client.query("SELECT * FROM products;")
  return results[0]; // Se não colocar o índice ele vai retornar tb metadados, e não é o que a gente quer
}

// função para selecionar todos os pacotes
const getPacks = async () => {
  const results = await client.query("SELECT * FROM packs;")
  return results[0];
}

// função para selecionar 1 produto pelo código
const getProductByCode = async (code) => {
  const results = await client.query("SELECT * FROM products WHERE code=?;", [code]) // ? simbola que  o valor do id é uma variável. O segundo parâmetro da query é a variável que vai substituir o ?. No caso o id de cada produto
  // return products.find(product => product.id === id)
  return results[0];
}

// função para criar novos produtos
const postProduct = async (product) => {
  newProductInfo = [product.code, product.name, product.cost_price, product.sales_price] // as interrogações são preenchidas na ordem que estão os valores nesse array
  await client.query("INSERT INTO products(code,name,cost_price,sales_price) VALUES (?,?,?,?)", newProductInfo)
}

// função de atualização de produtos
const updateProduct = async (code, product) => {
  productInfo = [product.code, product.name, product.cost_price, product.sales_price, product.code]
  await client.query("UPDATE products SET code=?,name=?,cost_price=?,sales_price=? WHERE code=?", productInfo) // Passar sempre as variáveis assim. Não passar diretamente na query para evitar ataques SQL injection
}

module.exports = {
  getProducts,
  getPacks,
  getProductByCode,
  postProduct,
  updateProduct,
}