var express = require("express");
var app = express();

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


app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/bbs', bbsRoutes);


var PORT = 1010;


app.listen(PORT, () => console.log("Server started"));