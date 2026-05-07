const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// "Banco de dados" temporário (em memória)
let historias = [
  { id: 1, titulo: "A Floresta Sombria", conteudo: "Era uma vez..." }
];

// 🔍 GET - listar histórias
app.get("/historias", (req, res) => {
  res.json(historias);
});

// ➕ POST - criar nova história
app.post("/historias", (req, res) => {
  const nova = {
    id: Date.now(),
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  };

  historias.push(nova);
  res.json(nova);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});