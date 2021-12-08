const express = require("express")
const logger = require("./middlewares/logger")
const app = express()

app.set("port", process.env.PORT || 3001)
app.use(express.json())
app.use(logger)

let notes = [
	{
		"id": 1,
		"name"  : "pablo",
		"pass" : "pass",
		"date" : new Date().toISOString(),
	},
	{
		"id": 2,
		"name"  : "rubb",
		"pass" : "pass",
		"date" : new Date().toISOString(),
	},
	{
		"id": 3,
		"name"  : "johnny",
		"pass" : "pass",
		"date" : new Date().toISOString(),
	}
]

app.get("/", (req, res) =>{
	res.send("server is live!")
})

app.get("/api/notes", (req, res) =>{
	res.json(notes)
})

app.get("/api/notes/:id", (req, res) =>{
	const id = req.params.id
	const note = notes.find(note => note.id == id)
	if (note) res.json(note)
	else res.status(404).end()
})

app.post("/api/notes", (req, res)=>{
	const note = req.body
	if(!note || !note.name)
		return res.status(400).json({
			error : "note.name is missing",
		})
	const newNote = {
		id : notes.length + 1,
		date : new Date().toISOString(),
		...note
	}
	notes = [...notes, newNote]
	res.status(201).json(newNote[notes.length - 1])
})

app.delete("/api/notes/:id", (req, res) =>{
	const id = req.params.id
	notes = notes.filter(note => note.id != id)
	res.status(204).end()
})

app.use((req, res) => {
    res.status(404).json({
        message : "Not found"
    })
})


app.listen(app.get("port"), () =>{
	console.log("Server is on ", app.get("port"))
})