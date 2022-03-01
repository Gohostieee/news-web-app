import pkg from 'mongoose'

const {Schema, model} = pkg;

const usersSchema = new Schema({
    name: {
        type: String,
        required:  true
    },
    email: {
        type: String,
        required:  true
    },
    password: {
        type: String,
        required:  true
    }
}, {timestamps: true});

const users = model('users', usersSchema);
export default users;