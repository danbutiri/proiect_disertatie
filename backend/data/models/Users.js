const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'neactivat',
        enum: ['admin','profesor','student','neactivat']
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    class_u: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;
