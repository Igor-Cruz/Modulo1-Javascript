const express = require('express')
//Chamada
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



//Express tem que definir as rotas ou ter algo disponível
app.get('/', (req, res) => {
  res.send('Igor')
  //consegue retornar JSON
  //res.send({name: 'Igor})

})


//endpoint
app.get('/users', (req, res) => {
  //res.send('Igor')
  //consegue retornar JSON
  res.send([{ name: 'Igor' }])
})

app.get('/page', (req, res) => {
  res.render('page', { name: 'Igor Cruz' })
})

//Para ficar disponível
app.listen(3000, err => {
  console.log(err)
})