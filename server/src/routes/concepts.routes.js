const express = require('express');
const router = express.Router();

const concept = require("../controllers/concept.controller")

router.get("/", concept.getAllConcepts, (req, res) =>{
	if(req.session.concepts) res.status(200).json(req.session.concepts).end()
	res.status(404).json({message : "Error DB"}).end()
})

router.get("/:id", (req, res) =>{
	const id = req.params.id
	const note = notes.find(note => note.id == id)
	if (note) res.status(200).json(note).end()
	res.status(404).json({message : "Error DB"}).end()
})

router.post("/", concept.createConcept, (req, res)=>{
	if(req.session.concept) res.status(201).json(req.session.concept).end()
	res.status(404).json({message : "Error DB"}).end()
})

router.delete("/:id", (req, res) =>{
	const id = req.params.id
	notes = notes.filter(note => note.id != id)
	res.status(204).end()
})

module.exports = router;