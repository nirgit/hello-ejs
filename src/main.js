const path = require('path')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.get('/', function(req, res) {
    res.render('pages/index', {
        name: 'Nir',
        time: Date()
    })
})

app.listen(8080)
console.log('started on: http://localhost:8080')
