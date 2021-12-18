const {model, Schema} = require("mongoose");

const myDocumentsSchema = new Schema({
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

module.exports = model('MyDocument', myDocumentsSchema);