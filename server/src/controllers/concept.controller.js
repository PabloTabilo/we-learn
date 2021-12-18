const mongoose = require("mongoose")

const Concept = require("../models/Concept")

const getAllConcepts = async(req, res, next) => {
    const id = req.body
    let ObjectId = mongoose.Types.ObjectId
    const yourConcepts = await Concept.find({user : new ObjectId(id)})
    req.session.concepts = yourConcepts;
    next()
}

const getSpecificConcept = () =>{
    const {id} = req.body
    let ObjectId = mongoose.Types.ObjectId
    const yourConcepts = await Concept.find({user : new ObjectId(id)})
    req.session.concepts = yourConcepts;
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
    const saveConcept = await newConcept.save();
    req.session.concept = saveConcept;
    next()
}

module.exports = {
    createConcept,
    getAllConcepts,
}