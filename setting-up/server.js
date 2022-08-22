const express = require('express')
const app = express()

// need this to set up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.static('./public'))

app.get('/', (req, res) => {
    // when sending html files with handlebars, instead of send(), use render()
    // render() takes two parameters 
    // the first should be 'main' so that it points to main.handlebars
    // the second is an object with a layout property which points to the index.handlebars file
    res.render('index', {layout: 'main'})
})

app.listen(5000, () => {
    console.log('app is listening on port 5000...')
})