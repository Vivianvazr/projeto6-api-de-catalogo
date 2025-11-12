import produtosRouter from "./produtos"
import express from "express"
import pingRouter from "./ping"

const router = express.Router()

router.use("/produtos", produtosRouter)
router.use("/ping", pingRouter)

router.get("/", (req, res) => {
    const nome = req.query.nome as string
    const idade = Number(req.query.idade)
    res.json({nome, idade})
})
router.get('/:nome/:idade', (req, res) => {
  const { nome, idade } = req.params;
  res.json({ nome, idade: Number(idade) })
})

router.post('/', (req, res) => {
  const { nome, idade } = req.body
  res.json({ nome, idade })
})

export default router