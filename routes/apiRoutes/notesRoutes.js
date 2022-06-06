const fs = require("fs");
const path = require("path");
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { createNewNote, validateNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../data/db');
const { response } = require("express");

router.get('/notes', (req, res) => {
  let results = fs.readFileSync(path.join(__dirname, '../../data/db.json'));
  var data = JSON.parse(results);
  if (req.query) {
    res.status(200).json(data.notes);
  } else {
    res.sendStatus(404)
  }
});

router.get('/notes/test', (req, res) => {
  res.send('Hello World');
})

router.post('/notes', (req, res) => {
  req.body.id =uuidv4();
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.status(200).json(note);
  }
});

router.delete('/notes/:id', function (req, res) {
  try {
    deleteNote(req.params.id);
    let results = notes;
    res.json(results);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;