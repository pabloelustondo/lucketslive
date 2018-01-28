var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var app = express();



app.use(bodyParser());

var AuthenticationSecret = "12340000123400001234";


var mongouri = "mongodb://lucketsdb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
 mongouri = "mongodb://localhost:27017";

var mongoauth = {auth: {user: 'lucketsdb', password: 'A86RP7FEbffrMeWTB8KOm8KASejUvSHLVZG8kjfRpgnilgIOIdNrf5UDw98fob15PSW0GQBUMiuY1AAuoLoSgw=='}};
 mongoauth = null;

var MongoClient = require('mongodb').MongoClient;

var myCollection;

MongoClient.connect(mongouri, mongoauth, function (err, db) {
    console.log("connected to DB");
});


function generateAuthenticationToken(payload, expirationTime) {
        return {authenticationToken: jwt.sign(payload, AuthenticationSecret, {expiresIn: expirationTime})};
}

console.log("dev:" + process.argv);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html')
});


app.post('/api/login', function (req, res) {
    console.log("post/api/login called ");

    let body = req.body;

    MongoClient.connect(mongouri, mongoauth, function (err, db) {

        if(err) res.send(err);

        console.log("connected to the mongoDB  lucketsdb (log)!");

        db.db('pme').collection('users').find({$query: {username: req.body.email}}, (user) => {
                    let token = generateAuthenticationToken(payload, expirationTime)
                    res.end(JSON.stringify(token));
            }, (error) => {
            console.log(err)
        });

    });
    console.log("/log called");

});

app.get('/logs', function (req, res) {

    MongoClient.connect(mongouri, mongoauth, function (err, db) {

        if(err) res.send(err);

        console.log("connected to the mongoDB  lucketsdb (log)!");

       db.db('pme').collection('log').insert({log:'log', timestamp: new Date()}).then(
           (insertMessage) => {
               //db.collection.find( { $query: {}, $orderby: { age : -1 } } )
               db.db('pme').collection('log').find({$query: {}, $orderby: { timestamp : -1 }}).toArray().then( (result) => {
                   console.log("/log found:" + JSON.stringify(result));
                   res.end(JSON.stringify(result));
               });
           }
       ).catch((error) => {
           console.log(err)
       });


    });
    console.log("/log called");

});

app.use(express.static('www'));

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
})