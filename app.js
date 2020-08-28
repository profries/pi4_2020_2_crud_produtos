const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/produtos', (req, res) => {
  res.json([{id:1, nome:'prod1', preco: 30.00}]);
})

app.post('/produtos', (req, res) => {
    console.log(req.body);
    console.log(req.body.nome);
    console.log(req.body.preco);
    res.status(201).json(req.body);
})

app.put('/produtos/:id', (req, res) => {
    if(req.params.id == 1){
        let produto = req.body;
        produto.preco += 5;
        res.json(produto);
    }
    else {
        res.sendStatus(404);
    }
    
})
  
app.delete('/produtos/:id', (req, res) => {
    if(req.params.id == 1){
        let produto = new Object();
        produto.id = 1;
        produto.nome = 'prod1';
        produto.preco = 30.00;
        res.json(produto);
    }
    else {
        res.sendStatus(404);
    }
})
    
app.get('/produtos/:id', (req, res) => {
    if(req.params.id == 1){
        let produto = new Object();
        produto.id = 1;
        produto.nome = 'prod1';
        produto.preco = 30.00;
        res.json(produto);
    }
    else {
        res.sendStatus(404);
    }
    
})
  
app.listen(port, () => {
  console.log(`Iniciando o servidor: http://localhost:${port}`)
})