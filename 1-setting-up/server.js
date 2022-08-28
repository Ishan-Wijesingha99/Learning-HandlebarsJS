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
    // whatever is in the layouts folder WILL be the backbone of every url, you don't have to specify it, that's what it will always be

    // what matters is what is displayed in {{{body}}}
    // the first argument in .render() is a string that points to the handlebars file you want to render in {{{body}}}
    // the second argument is an object that has properties, each of these properties are variables/functions you want to get access too in that particular handlebars file that you mentioned in the first argument
    res.render('list')
})

app.listen(5000, () => {
    console.log('app is listening on port 5000...')
})