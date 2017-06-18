var mongo=require("mongodb").MongoClient;
var url='mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db){
	var users=db.collection("users");
	users.update({
		username:'tinatime'
	},{
		$set:{
			age:40
		}
	});
	db.close()
});
