import router from "./routes"
import express from "express"
import helmet from "helmet"
import path from "path"



const app = express()

app.use(helmet())
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "..public")))

app.use("/", router)

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})


const server = app.listen(3000, () => {
  console.log("Servidor rodando");
});



server.close(() => {
  console.log("Servidor encerrado.");
});

export default server;