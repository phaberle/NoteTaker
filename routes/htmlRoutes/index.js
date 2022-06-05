//MIDDLEWARE
const path = require('path');
const router = require('express').Router();

//HTML PAGES
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

//wildcard
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/index.html'));
})


module.exports = router;