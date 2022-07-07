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
    console.info(`${req.method} request recieved to get reviews`);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});





    // POST FOR RECIEVING NOTES AND WRITING TO DB

app.post('/api/notes',(req, res) => {
    res.json(`${req.method} request recieved to add a note`)











    
});


    //LOGS THE PORT WHEN DEPLOYED 
app.listen(PORT, () => console.log("Server listening on port " + PORT));