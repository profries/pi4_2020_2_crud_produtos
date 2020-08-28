const controller = require('./controller/produto_controller');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/produtos', controller.listar)

app.post('/produtos', controller.inserir)

app.put('/produtos/:id', controller.atualizar)
  
app.delete('/produtos/:id', controller.deletar)
    
app.get('/produtos/:id', controller.buscarPorId)
  
app.listen(port, () => {
  console.log(`Iniciando o servidor: http://localhost:${port}`)
})