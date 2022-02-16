import fetch from "node-fetch"
import  articles  from '../models/articles.js'
import 'dotenv/config'
const key=process.env.region
console.log(key)
async function data_fetch(date) {
    let data;
    data = await fetch(`https://newsapi.org/v2/everything?pageSize=100&apiKey=${key}`).then((e)=>{
        return e.json()
    }).then((r) =>{
        return r;
    })
    return data
}

let d = await data_fetch()
console.log(d)
