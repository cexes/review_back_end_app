const express = require('express');
const app = express()
const port = 3030


app.get("/teste",()=>{
  console.log("Teste")
})

app.listen(port, ()=> {
  console.log("Rodando")
})

