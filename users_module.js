//Step 1: Database connection using connection string
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb://hlharshil:king17@ac-ep0a4q7-shard-00-00.ehpg9mu.mongodb.net:27017,ac-ep0a4q7-shard-00-01.ehpg9mu.mongodb.net:27017,ac-ep0a4q7-shard-00-02.ehpg9mu.mongodb.net:27017/tcet?ssl=true&replicaSet=atlas-p0vf6a-shard-0&authSource=admin&retryWrites=true&w=majority"


mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );

//Step 2: Create Schema (similar to Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);

exports.User = userObject;