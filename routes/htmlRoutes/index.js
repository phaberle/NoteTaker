//MIDDLEWARE
const path = require('path');
const router = require('express').Router();

//HTML PAGES
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

router.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

router.post('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

router.post('/notes/id',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

//wildcard
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
})


module.exports = router;