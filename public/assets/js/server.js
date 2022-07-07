// CONSTS FOR REQUIRES & PORT
const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



    // GET ROUTES

app.get('/notes',(req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
    console.info(`${req.method} request recieved to get notes`);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});





    // POST FOR RECIEVING NOTES AND WRITING TO DB

app.post('/api/notes',(req, res) => {
    
    console.info(`${req.method} request recieved to add a note`)

    let addedNote = req.body;
    let noteList = JSON.parse(fs.readFileSync("/db/db.json"));
    let noteLength = (noteList.length).toString();
    
    addedNote.id = noteLength;
    noteList.push(addedNote);
    fs.writeFileSync("/db/db.json", JSON.stringify(noteList));
    res.json(noteList)  
});


    //LOGS THE PORT WHEN DEPLOYED 
app.listen(PORT, () => console.log("Server listening on port " + PORT));