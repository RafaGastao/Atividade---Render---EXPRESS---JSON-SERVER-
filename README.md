# CRUD com JSON Server + Node.js/Express

Projeto acadêmico com as quatro operações CRUD em páginas separadas e busca por CPF.

## Campos

nome, sobrenome, email, cpf, idade, telefone, rua, bairro, cidade, estado e rg.

## Estrutura

- `CRUD-Completo/public/post/` — POST / Create
- `CRUD-Completo/public/get/` — GET / Read
- `CRUD-Completo/public/put/` — PUT / Update
- `CRUD-Completo/public/delete/` — DELETE / Delete
- `CRUD-Completo/db.json` — banco JSON
- `CRUD-Completo/server.js` — Express + JSON Server

## Rodar localmente

```bash
cd CRUD-Completo
npm install
npm start
```

Abra `http://localhost:3000`.

Na página GET, use o campo **Buscar por CPF** para localizar um cadastro. O CPF
pode ser informado com ou sem pontuação.

## GitHub

```bash
git init
git add .
git commit -m "Projeto CRUD com JSON Server e Express"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Render

1. Envie o projeto ao GitHub.
2. No Render, crie um **Web Service** e conecte o repositório.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Faça o deploy.

> Observação: o Render pode usar armazenamento efêmero. Alterações feitas no
> `db.json` durante a execução podem ser perdidas após reinicializações ou
> redeploys. Para a demonstração acadêmica do CRUD, a aplicação continua
> adequada, mas persistência permanente em produção exigiria um banco persistente.
