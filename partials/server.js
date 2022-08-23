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
    // list.handlebars will be rendered as {{{body}}} in main.handlebars
    res.render('list', {layout: 'main'})
})



app.listen(5000, () => {
    console.log('app is listening on port 5000...')
})