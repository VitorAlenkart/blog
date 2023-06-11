const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// View Engine
app.set('view engine','ejs');


// Static
app.use(express.static('public'));


// Set body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Rotes
app.get('/', (req,res) => {
    res.render('index');
})


// Server
app.listen(8080, () => {
    console.log('Servidor rodando');
})