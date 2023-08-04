var MongoClient = require('mongodb').MongoClient ;
var url = 'mongodb://127.0.0.1:27017/college' ;

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("database created successfully");
    db.close();
})