const express = require('express')
const app = express()



// need this to set up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.static('./public'))



// set up string as the output of a function
const greetingString = function() {
    return 'Hello there!'
}



app.get('/', (req, res) => {
    // to dynamically render a string using handlebars, just add it as a property to the object
    // can also just do greeting: 'Hello there!' , that would work the same
    res.render('list', {greeting: greetingString()})
})



app.listen(5000, () => {
    console.log('app is listening on port 5000...')
})