const express = require('express')
const app = express()

app.get('/', (req, res) =>
  res.send('Hello f*****g World!'))

app.get('/hello', (req, res) => {
  res.render('index')
})

app.get('/tdd', (req, res) => {
  res.render('tdd')
})

app.set('route engine', 'ejs');
app.set('routes', 'routes')

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app
