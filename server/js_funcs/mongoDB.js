import { MongoClient } from 'mongodb'
import  mongoose  from 'mongoose'
import '../models/articles.js'

const uri = "";
mongoose.connect(uri)
    .then(console.log("connected and stuff"))
