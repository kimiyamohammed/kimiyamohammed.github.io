let path = require('path');
let express = require('express');
let router = express.Router({caseSensitive:false,strict:false});


router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','product.html'));
});

router.post('/',(req,res,next) => {
    res.write('Product name: '+ req.body.pname + '\n');
    res.write('Quantity: '+ req.body.qty + '\n');
    res.write('Price: '+ req.body.price + '\n');
    res.end();
});

module.exports = router;