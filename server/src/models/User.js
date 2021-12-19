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
    },
    concepts: [
        {
            type: Schema.Types.ObjectId,
            ref : "Concept"
        }
    ]
},{
    timestamp : true,
    versionKey: false
})

userSchema.set("toJSON", {
    transform : (document, returnedObject) => {
        delete returnedObject.password
    }
})

module.exports = model('User', userSchema);