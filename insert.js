var mongo = require('mongodb').MongoClient
    mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
        if(err) throw err;
        var docs = db.collection('docs'),
            obj = {firstName: process.argv[2], lastName: process.argv[3]};
        docs.insert(obj);
        console.log(JSON.stringify(obj));
        db.close();
});
