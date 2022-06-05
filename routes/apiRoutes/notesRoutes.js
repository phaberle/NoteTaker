const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../data/db');

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    res.json(results);
  } else {
    res.sendStatus(404)
  }
});

router.get('/notes/test', (req, res) => {
  res.send('Hello World');
})

router.post('/note', (req, res) => {
  req.body.id = notes.length.toString();
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;