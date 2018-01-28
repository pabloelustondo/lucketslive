var express = require('express');
var app = express();


var mongouri = "mongodb://lucketsdb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
var mongouri = "mongodb://localhost:27017";


var MongoClient = require('mongodb').MongoClient;

var myCollection;

MongoClient.connect(mongouri, {user: 'lucketsdb', password: 'A86RP7FEbffrMeWTB8KOm8KASejUvSHLVZG8kjfRpgnilgIOIdNrf5UDw98fob15PSW0GQBUMiuY1AAuoLoSgw=='}, function (err, db) {
   console.log("connected to DB");
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ui/www/index.html')
});

app.get('/logs', function (req, res) {

    MongoClient.connect(mongouri,{auth: {user: 'lucketsdb', password: 'A86RP7FEbffrMeWTB8KOm8KASejUvSHLVZG8kjfRpgnilgIOIdNrf5UDw98fob15PSW0GQBUMiuY1AAuoLoSgw=='}}, function (err, db) {

        if(err) res.send(logs);

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

app.use(express.static('ui/www'));

var port = process.env.PORT || 8081;

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})