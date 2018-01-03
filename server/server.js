var express = require('express');
var app = express();


var MongoClient = require('mongodb').MongoClient;

var myCollection;
var db = MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myNewCollection = db.db('pme').createCollection('test');
    myCollection = db.db('pme').collection('luckets').find().toArray().then( (result) => {
        console.log(JSON.stringify(result));
    });

});


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html')
});

app.use(express.static('www'));

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})