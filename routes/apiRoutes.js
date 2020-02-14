const router = require("express").Router();
const fs = require("fs");
const express = require("express");
const app = express();

const noteData = require("../db/db.json");
let note = [];

router.get("/api/notes", function(req, res) {
    res.json(noteData);
});

router.post("/api/notes", function(req, res) {
    let data = req.body;
    // console.log(data);
    let id = 1; 
    if (noteData.length !== 0){
        id = noteData.length+1;
    }
    
    data = {id, ...data};
    noteData.push(data);
    // console.log(note);
    fs.writeFile("./db/db.json", JSON.stringify(noteData), (err)=> {
        console.log('your note has been written');
        res.json(JSON.stringify(data));
    
    });
});



module.exports = router