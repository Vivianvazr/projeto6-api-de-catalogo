import express from "express"

const router = express.Router()

const produtos = [
  { "id": 1, "nome": "Mouse Gamer", "preco": 120 },
  { "id": 2, "nome": "Teclado Mecânico", "preco": 350 },
  { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
]

router.get("/", (req, res) => {
res.json(produtos)
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const produto = produtos.find(p => String(p.id) === id);
    res.json(produto);
});

router.post("/", (req, res) => {
const novoProduto = req.body;
res.json(novoProduto);
});

export default router