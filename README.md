# Projeto: Circuit Coffee - (Criando uma aplicação React)

**Dev**: João Vicente de Oliveira Watanabe

## Objetivo

Este projeto consiste em criar uma aplicação com ReactJS, representando uma cafeteria ficticia,  o objetivo é componentizar a aplicação e usar CSS module.

## Layout

O design completo do projeto está disponível no arquivo (nome_do_arquivo) (Figma), que pode ser encontrado no repositório.

### Deixe sua FAKE API Rodando para que os endpoints funcionem

```bash
# Instalar JSON Server globalmente
npm install -g json-server

# Executar o servidor
npx json-server db.json

# Para rodar em uma porta específica
npx json-server db.json --port 3333
```

### Endpoints:

- `/produtos`
  - `GET`: pegar a lista de produtos
- `/produtos/[id] `(trocar `[id]` pelo id do produto)
  - `GET` => pegar os dados de um produto específico
- `/carrinho`
  - `GET`: pegar a lista de produtos no carrinho
  - `POST`: cadastrar um item no carrinho
- `/carrinho/[id]` (trocar `[id]` pelo id do item)
  - `DELETE`: deletar um item do carrinho
  - `PUT`: alterar os dados do item no carrinho

2. Fazer a integração com a API para substituir o array de produtos e o array de produtos no carrinho:

- Home
  - Obtenha a listagem de produtos no endopoint `GET /produtos`
- Produto
  - Obtenha os dados do produto específico no endpoint `GET /produtos[id]`
  - Ao clicar em comprar, o produto deve ser adicionado no carrinho, use o endpoint `POST /carrinho`
- carrinho:
  - Obtenha a listagem de produtos do carrinho no endpoint `GET /carrinho`
  - Delete um produto do carrinho usando o endpoint `DELETE /carrinho/[id]`
  - Altere a quantidade de um produto do carrinho `PUT /carrinho/[id]`
  - Exclua todos os itens do carrinho usando o endpoint `DELETE /carrinho/[id]`. Dica você pode usar um foreach para deletar todos.
  - Calcule o subtotal, frete e valor total usando o endpoint `GET /carrinho`

### Final to-do:
1. Criar um Hook para gerenciar os estados de Carrinho
2. Fazer o deploy da aplicação usando netlify

