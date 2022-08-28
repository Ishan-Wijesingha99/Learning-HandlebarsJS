const express = require('express')
const app = express()



// need this to set up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(express.static('./public'))



// we will be iterating through this array of objects
const arrayOfObjects = [
    {
        firstName: 'Ishan',
        lastName: 'Wijesingha',
        age: 21,
        university: 'Swinburne'
    },
    {
        firstName: 'Hugh',
        lastName: 'Farrell',
        age: 20,
        university: 'Monash'
    },
    {
        firstName: 'Xavier',
        lastName: 'Wittingslow',
        age: 20,
        university: 'Swinburne'
    },
    {
        firstName: 'Pratik',
        lastName: 'Sharma',
        age: 20,
        university: 'Latrobe'
    },
]



app.get('/', (req, res) => {
    // to make the arrayOfObjects available in handlebars, add it as a property
    res.render('list', {objectArray: arrayOfObjects})
})



app.listen(5000, () => {
    console.log('app is listening on port 5000...')
})