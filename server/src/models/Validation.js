const {model, Schema} = require("mongoose");

const validationSchema = new Schema({
    title : String,
    project : String, // URL Github
    Resume : String, // URL Github or Note
    ankiCards : String, // URL ankiMaze or local anki cards
    concept : {
        ref : "Concept",
        type : Schema.Types.ObjectId
    }
},{
    timestamp : true,
    versionKey: false
})

module.exports = model('Validation', validationSchema);