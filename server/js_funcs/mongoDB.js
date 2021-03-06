import { MongoClient } from 'mongodb'
import  mongoose  from 'mongoose'
import '../models/articles.js'
import users from '../models/users.js'
import crypto from 'crypto'

const uri = "mongodb://localhost";
mongoose.connect(uri)
    .then(console.log("connected and stuff"))

async function articles_store(data) {
    if (data.status == 'ok') {
        articles.insertMany(data.articles);
    } else {
        throw `${data.code}: ${data.message}`;
    }
}

async function users_register(data) {
    let passwordHash = crypto.createHash('sha256').update(data.password).digest('hex');

    let user = new users({
        name: data.name,
        email: data.email,
        password: passwordHash
    });

    user.save();
}

export default users_register;