const router = require("express").Router();
const fs = require("fs");
const express = require("express");
const app = express();

const noteData = require("../db/db.json");
let note = [];

router.get("/api/notes", function(req, res) {
    res.json(noteData);
});

// router.post("/api/notes", function(req, res) {
//     let newData = req.body;

//     let id = 0 
//     if (note.length >= 0){
//         id++;
//     }
    
//     newData = {id, ...newData};
//     console.log(newData);
//     note.push(newData);
// });



module.exports = router