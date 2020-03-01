var express = require("express");
var app = express();
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

/*
app.use((req, res) => {
    res.json({
        message: 'okay'
    });
});
*/


var productRoutes = require('./routes/products');
var cartRoutes = require('./routes/carts');
var bbsRoutes = require('./routes/bbs');

const DB = "";

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("MongoDB Connected"))
    .catch(error => console.log(error));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.url({ extended: false }));


app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/bbs', bbsRoutes);


var PORT = 1010;


app.listen(PORT, () => console.log("Server started"));