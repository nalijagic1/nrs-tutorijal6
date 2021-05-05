const fs = require('fs');
const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/gradovi',function (req, res) {
    console.log("Tu")
    var gradoviSaZarezom = fs.readFileSync('public/gradovi.csv');
    var gradovi = gradoviSaZarezom.toString().split(",");
    var imenaGradova =[];
    for(let i of gradovi){
        var object ={naziv:i};
        imenaGradova.push(object);
    }
    res.end(JSON.stringify(imenaGradova));
});
app.listen(8080);