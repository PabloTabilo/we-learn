const express = require('express');
const router = express.Router();

const concept = require("../controllers/concept.controller")

router.get("/", concept.getAllConcepts, (req, res) =>{
	if(req.session.concepts) res.status(200).json(req.session.concepts).end()
	else res.status(404).json({message : "Error DB"}).end()
})

router.get("/:id", concept.getSpecificConcept, (req, res) =>{
	if (req.session.concept) res.status(200).json(req.session.concept).end()
	else res.status(404).json({message : "Error DB"}).end()
})

router.post("/", concept.createConcept, (req, res)=>{
	if(req.session.concept) res.status(201).json(req.session.concept).end()
	else res.status(404).json({message : "Error DB"}).end()
})

router.delete("/:id", concept.deleteConcept, (req, res) =>{
	if(req.session.concept) res.status(204).json(req.session.concept).end()
	else res.status(404).json({message : "Error DB"}).end()
})

module.exports = router;