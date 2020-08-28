const express = require('express')
const app = express()
const port = 3000

app.get('/produtos', (req, res) => {
  res.send('GET')
})

app.post('/produtos', (req, res) => {
    res.send('POST')
})

app.put('/produtos/:id', (req, res) => {
    res.send('PUT'+req.params.id)
})
  
app.delete('/produtos/:id', (req, res) => {
    res.send('DELETE'+req.params.id)
})
    
app.get('/produtos/:id', (req, res) => {
    res.send('GET'+req.params.id)
})
  
app.listen(port, () => {
  console.log(`Iniciando o servidor: http://localhost:${port}`)
})