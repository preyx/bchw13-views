const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.use(express.static(join(__dirname, 'public')))
app.set('view engine', '.hbs')

app.use(require('./controllers/burger_controller'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000)
