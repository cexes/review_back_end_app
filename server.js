require('./src/database')
const express = require('express');
const app = express()
const routes = require('./src/routes/routes')
const session = require('./src/middlewares/Session')

app.use(express.json())
app.use(routes);


app.listen(3030, ()=> {
  console.log("Rodando na porta 3030")
})

