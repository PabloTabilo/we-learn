const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const session = require("express-session")

const app = express()

const conceptsRouter = require("./routes/concepts.routes")
const usersRouter = require("./routes/users.routes")

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
 }))

app.get("/", (req, res) =>res.status(200).send("<h1>server is live!</h1>"))

app.use("/api/concepts", conceptsRouter);
app.use("/api/users", usersRouter);

app.use((req, res) => res.status(404).json({message : "Not found"}))
module.exports = app;