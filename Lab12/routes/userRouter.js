let path = require('path');
let express = require('express');
let router = express.Router({caseSensitive:false,strict:false});

router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','user.html'));
});

router.post('/',(req,res,next) => {
    res.write('Firstname: '+ req.body.fname + '\n');
    res.write('Lastname: '+ req.body.lname + '\n');
    res.write('Phone number' + req.body.phone + '\n');
    res.end();
});

router.all('*', (req,res,next) => {throw new Error("Error!!!")});

module.exports = router;