import pkg from 'mongoose'
const {Schema,model} = pkg
const articlesScheme = new Schema({
    title: {
        type: String,
        required:  true
    },
    date: {
        type: String,
        required:  true
    },
    Author: {
        type: String,
        required:  true
    },
    content: {
        type: String,
        required:  true
    },
    url: {
        type: String,
        required:  true
    },
},{timestamps:true})

const articles = model('articles',articlesScheme)
export default articles;