const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ logger: true });
const PORT = process.env.PORT || 3000;

function normalizarCpf(cpf) {
  return String(cpf || '').replace(/\D/g, '');
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middlewares);

app.get('/buscar/cpf/:cpf', (req, res) => {
  const cpf = normalizarCpf(req.params.cpf);
  const pessoa = router.db.get('pessoas')
    .find((registro) => normalizarCpf(registro.cpf) === cpf)
    .value();

  if (!pessoa) {
    return res.status(404).json({ message: 'CPF não encontrado.' });
  }

  return res.json(pessoa);
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
