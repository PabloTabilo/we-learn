const {model, Schema} = require("mongoose");

const videosSchema = new Schema({
    title : String,
    source : String,
    status : Number,
    concept : {
        ref : "Concept",
        type: Schema.Types.ObjectId
    }
},{
    timestamp : true,
    versionKey: false
})

module.exports = model('Video', videosSchema);