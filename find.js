var mongo=require('mongodb').MongoClient
var link='mongodb://localhost:27017/learnyoumongo'
mongo.connect(link, function(err,db){
	var parrots=db.collection('parrots');
	parrots.find({
		age:{
			$gt:+ process.argv[2]
		}
	}).toArray(function(err, documents){
		
	console.log(documents);		
})
db.close();
})
