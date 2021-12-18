const express = require('express');
const router = express.Router();

const user = require("../controllers/user.controller")

router.get("/", user.getAllUsers, (req, res) =>{
	if(req.session.users) res.status(200).json(req.session.users)
	else res.status(404).end()
})

router.get("/:id", user.getUserById, (req, res) =>{
	if(req.session.user) res.status(200).json(req.session.user)
	else res.status(404).end()
})

router.post("/", user.createUser, (req, res)=>{
	res.status(201).json(req.session.user)
})

router.delete("/:id", user.deleteUserById, (req, res) =>{
	if(req.session.user) res.status(204).json(req.session.user)
	else res.status(404).end()
})

module.exports = router;