const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const notes = body;
    notesArray.push(notes);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    return notes;
}


function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}


function deleteNote(id) {
    try {
        var idRemove = id;
        var data = fs.readFileSync('./data/db.json')
        var json = JSON.parse(data);
        var notes = json.notes;
        json.notes = notes.filter((note) => { return note.id !== idRemove });
        fs.writeFileSync('./data/db.json', JSON.stringify(json, null, 2));
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { createNewNote, validateNote, deleteNote };