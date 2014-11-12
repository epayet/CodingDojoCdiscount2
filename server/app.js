var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser());

app.get("/resource", function (req, res) {
    console.log('coucou');
    res.send({result: 'coucou'});
    res.end();
});

app.listen(8081, function() {
    console.log("Server started");
});