const express = require('express');
const app = express();
const port = 3000;


app.get('/ola/:mateus', (req, res) => {
  const mateus = req.params.mateus;
  const hora =12;

  const saudacao = hora < 18 ? 'Bom dia' : 'Boa noite';
  res.send(`${saudacao}, ${mateus}!`);
});


app.get('/boa-noite/:mateus', (req, res) => {
  const mateus = req.params.mateus;
  res.send(`Boa noite, ${mateus}!`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});