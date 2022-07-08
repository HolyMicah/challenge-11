// CONSTS FOR REQUIRES & PORT
const express = require("express");
const path = require("path");
const fs = require("fs");
const serverPort = 8080;
const PORT = process.env.PORT || serverPort;
const app = express();

// USING CRYPTO TO GENERATE A RANDOM ID FOR EACH ADDED NOTE
const randomId = require("crypto");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



    // GET ROUTES

app.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"));
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    response.json(data);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});





    // POST FOR RECIEVING NOTES AND WRITING TO DB

app.post('/api/notes',(req, res) => {
    
    console.info(`${req.method} request recieved to add a note`)

    let addedNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    
    
    addedNote.id = randomId;
    noteList.push(addedNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList)  
});


    //LOGS THE PORT WHEN DEPLOYED 
app.listen(PORT, () => console.log("Server listening on port " + PORT));