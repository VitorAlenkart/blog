const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/connection');

const CategoriesController = require('./categories/CategoriesController');
const ArticlesController = require('./articles/ArticlesController');


// View Engine
app.set('view engine','ejs');


// Static
app.use(express.static('public'));


// Set body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Set database
    connection
        .authenticate()
        .then(() => {
            console.log('Connection with the database sucessfully!')
        })
        .catch((err) => {
            console.log(err)
        })


// Rotes
app.use('/', CategoriesController);
app.use('/', ArticlesController);


// Server
app.listen(8080, () => {
    console.log('Servidor rodando');
})