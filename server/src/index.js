const mypath = require("path");
require("dotenv").config({path: mypath.join(__dirname, ".env")})
const app = require('./app')
require("./database")

app.set("port", process.env.PORT || 3001)
app.listen(app.get("port"), () =>{
	console.log("Server is on", app.get("port"))
})