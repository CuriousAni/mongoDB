//insertOne : to single document

var MongoClient = require('mongodb').MongoClient ;
var url = 'mongodb://127.0.0.1:2017insett' ;

MongoClient.connect(url,function(err,client){
    if(err) throw err;
    var db = client.db("college");

    var s= {name :"ANI", address:"pune"};
    db.collection("students").insertOne(s,function(err,result){
        if(err) throw err;
        console.log("Inserted!!");
        client.close();
    })
})