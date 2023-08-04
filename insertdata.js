var MongoClient = require('mongodb').MongoClient ;
var url = 'mongodb://127.0.0.1:27017/' ;

MongoClient.connect(url,function(err,client){
    var db= client.db('college');
    if(err) throw err;

    var s = {name:"Anima", address:"lane1"};

    db.collection('student').insertOne(s,function(err,result){
        if(err) throw err;
        console.log("one record saved");
        client.close()
    })
})