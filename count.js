var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err) throw err;
    var col = db.collection('parrots');

    col.count({
        age: {
      $gt: +process.argv[2]
    }
    }, function(err,count) {
        if (err) throw err;
	console.log(count);
        db.close()
    });
});
