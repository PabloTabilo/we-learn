const {model, Schema} = require("mongoose");

const conceptSchema = new Schema({
    conceptName: String,
    totalStatus: Number,
    user : {
        ref : "User",
        type : Schema.Types.ObjectId
    }
},{
    timestamp : true,
    versionKey: false
})

module.exports = model('Concept', conceptSchema);