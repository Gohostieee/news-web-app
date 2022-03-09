import fetch from "node-fetch"
import  articles  from './models/articles.js'
import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'
import NewsAPI from 'newsapi'
dotenv.config({path :'./.env'});
const client = new MongoClient(process.env.uri);
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

const key=process.env.newsapi;
async function  news_init(){
    const newsapi = await new NewsAPI(key)
    return newsapi
}
news_init().then((e)=> {
    e.v2.everything({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2017-12-01',
        to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    }).then(response => {
        console.log(response);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
    });
})


console.log(key)
console.log(uri+"lelw")
process.on('uncaughtException', function (err) {
    console.log(err);
});

console.log(key)