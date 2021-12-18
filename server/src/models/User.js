const {model, Schema} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required : true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required : true
    }
},{
    timestamp : true,
    versionKey: false
})

module.exports = model('User', userSchema);