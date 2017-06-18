const mongo=require("mongodb").MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db){
	var col=db.collection("prices")
	col.aggregate([
		{$match:{size:process.argv[2]}},
		{$group:{_id:'average',average:{$avg: '$price'}}}
	]).toArray(function(err, results){
	console.log(Number(results[0].average).toFixed(2));
	db.close()
	});
})

