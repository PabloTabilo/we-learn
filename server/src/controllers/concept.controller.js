const mongoose = require("mongoose")

const User =  require("../models/User")
const Concept = require("../models/Concept")

const getAllConcepts = async(req, res, next) => {
    const id = req.body
    let ObjectId = mongoose.Types.ObjectId
    const yourConcepts = await Concept.find({user : new ObjectId(id)})
    req.session.concepts = yourConcepts;
    next()
}

const getSpecificConcept = async (req, res, next) =>{
    const {userid} = req.body
    const {id} = req.params
    let ObjectId = mongoose.Types.ObjectId
    const yourConcept = await Concept.findById(id)
    req.session.concept = yourConcept
    next()
}

const createConcept = async (req, res, next) => {
    const {conceptName, id} = req.body
    const newConcept = new Concept(
        {
            conceptName,
            totalStatus : 0,
            user : id
        }
    )
    const myUser = await User.findById(id)
    const saveConcept = await newConcept.save()
    myUser.concepts = [...myUser.concepts, saveConcept._id]
    console.log(myUser)
    const updateUser = User.findByIdAndUpdate(myUser._id, {concepts : myUser.concepts})
    console.log("updateUser:", updateUser)
    req.session.concept = saveConcept
    next()
}

const deleteConcept = async (req, res, next) => {
    const {id} = req.params
    const deleted = await Concept.findByIdAndDelete(id)
    req.session.concept = deleted
    next()
}

module.exports = {
    createConcept,
    getAllConcepts,
    getSpecificConcept,
    deleteConcept,
}