let path = require('path');
let express = require('express');
let productRouter = require('./routes/productRouter');
let userRouter = require('./routes/userRouter');

let app = express();

app.use(express.urlencoded({extended:true}));
app.use('/styler',express.static(path.join(__dirname,'public','css')));

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','homepage.html'));
});

app.use('/product',productRouter);
app.use('/user',userRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));

});
app.use((err,req,res,next)=>{
    res.status(500).send('Something broke!');
});

app.listen(3000,()=> console.log("Listening at port 3000........"));