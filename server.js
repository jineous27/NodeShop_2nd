var express = require("express");
var app = express();

app.use((req, res) => {
    res.json({
        message: 'okay'
    });
});




var PORT = 1010;


app.listen(PORT, () => console.log("Server started"));