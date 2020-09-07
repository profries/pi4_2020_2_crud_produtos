const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000

//Importa Rotas
const rotaProduto = require('./rotas/produto_rota');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Configuração do Mongoose
mongoose.connect('mongodb://localhost/app_produtos', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(()=> {
    console.log('BD conectado');
  })
  .catch((error)=> {
    console.log('Error ao conectar ao BD');
  });
mongoose.Promise = global.Promise;

//Uso das rotas
app.use('/api/produtos', rotaProduto);
  
app.listen(port, () => {
  console.log(`Iniciando o servidor: http://localhost:${port}`)
})