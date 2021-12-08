const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

let data = [
    {
        "id": 1,
        "name"  : "pablo",
        "pass" : "pass",
    },
    {
        "id": 2,
        "name"  : "rubb",
        "pass" : "pass",
    }
];

app.get("/", (req, res) =>{
    res.send("server is live!");
})

app.get("/api/notes", (req, res) =>{
    res.json(data);
})

app.listen(app.get("port"), () =>{
    console.log("Server is on ", app.get("port"));
})