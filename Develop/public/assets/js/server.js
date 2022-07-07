const express = require("express");
const path = require("path")
const script = require("index.js")

const PORT = 3001;

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/',(req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request recieved to get reviews`);
    console.info(`${req.method} request recieved to get reviews`);
});

app.post('/api/notes',(req, res) => {
    res.json(`${req.method} request recieved to add a note`)











    
});

