import { MongoClient } from 'mongodb'
import  mongoose  from 'mongoose'
import '../models/articles.js'

const uri = "";
mongoose.connect(uri)
    .then(console.log("connected and stuff"))

async function articles_store(data) {
    if (data.status == 'ok') {
        articles.insertMany(data.articles);
    } else {
        throw `${data.code}: ${data.message}`;
    }
}