var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url,function(err,client){
    if(err) throw err;
    var db = client.db("college");
    db.createCollection("students", function(err,result){
        if(err) throw err;
        console.log("collection created");
        client.close();

    })
})