# Ferramenta de Atualização de Preços para E-commerce

Esta é uma aplicação desenvolvida para ajudar empresas de e-commerce a atualizar os preços de seus produtos de forma eficiente, evitando erros que possam prejudicar o negócio. A ferramenta permite a importação de um arquivo CSV contendo os códigos de produtos e os novos preços a serem definidos. Além disso, ela garante que as atualizações sigam as regras estabelecidas pela empresa, como evitar preços de venda abaixo do custo, limitar os reajustes a 10% do preço atual e garantir a consistência dos preços em pacotes de produtos.

## Requisitos do Sistema

Para executar esta aplicação localmente, siga os passos abaixo:

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js: [Download Node.js](https://nodejs.org/)
- MySQL: [Download MySQL](https://dev.mysql.com/downloads/)

### Configuração do Banco de Dados

Você deve configurar o MySQL com as seguintes variáveis de ambiente:

- `PORT`: A porta onde o servidor MySQL está rodando.
- `CONNECTION_STRING`: As informações de conexão com o banco de dados MySQL.

### Instalação

1. Clone este repositório para sua máquina:

   ```bash
   git clone git@github.com:luccarendall/Desafio-shopper.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd desafio-shopper
   ```

3. Instale as dependências do servidor:

   ```bash
   cd backend
   npm install
   ```

4. Instale as dependências do cliente:

   ```bash
   cd frontend
   npm install
   ```

### Execução

1. Inicie o servidor:

   ```bash
   cd backend
   npm start
   ```

2. Inicie o cliente:

   ```bash
   cd frontend
   npm start
   ```

Agora, a aplicação estará disponível localmente.

## Utilização

Após iniciar a aplicação, siga os passos a seguir:

1. Faça o upload do arquivo CSV contendo os códigos de produtos e os novos preços.
2. Clique no botão "VALIDAR" para verificar as regras de atualização.
3. Os produtos serão listados com informações sobre o código, nome, preço atual e novo preço. Se houver regras quebradas, essas informações serão destacadas.
4. O botão "ATUALIZAR" ficará habilitado apenas se todos os produtos estiverem validados e sem regras quebradas.
5. Clique em "ATUALIZAR" para salvar os novos preços no banco de dados e preparar a tela para o envio de um novo arquivo.

Lembre-se de configurar corretamente as variáveis de ambiente `PORT` e `CONNECTION_STRING` antes de iniciar a aplicação.

Aproveite a ferramenta para manter os preços de sua loja de e-commerce atualizados e competitivos!
