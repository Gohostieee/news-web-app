import { MongoClient } from 'mongodb'
import  mongoose  from 'mongoose'
import '../models/articles.js'

const uri = "mongodb+srv://gohost:<password>@cluster0.hhjux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri)
    .then(console.log("connected and stuff"))
/*
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect(err => {
    const collection = client.db("test").collection("Article queries");
    console.log(collection)
     const p = collection.insertOne(personDocument);

     // perform actions on the collection object
});

const db = await client.db("Cluster0")
console.log("free canada")
*/