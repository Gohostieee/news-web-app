import fetch from "node-fetch"
async function data_fetch(date) {
    let data;
    data = await fetch("https://newsapi.org/v2/everything?pageSize=101&apiKey=").then((e)=>{
        return e.json()
    }).then((r) =>{
        return r;
    })
    return data
}
let d = await data_fetch()
console.log(d)
