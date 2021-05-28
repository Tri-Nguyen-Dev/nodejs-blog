const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const path = require('path');

const app = express()

// Views and view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// config port
const port = 3000

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// route

const route = require('./routes')
route(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})