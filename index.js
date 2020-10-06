const bodyParser = require('body-parser')
var express =require('express')
var parser =require('body-parser')
var mongoose =require("mongoose")
var itemRouter =require('./routes/itemRoute')
var app =express()

app.use(parser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send("i am root....")
})
app.use('/items',itemRouter)

mongoose.connect("mongodb+srv://7ananthan:godisgrea7@cluster0-fcx3v.mongodb.net/test?retryWrites=true&w=majority");
app.listen(process.env.PORT || 3000,()=>{
    console.log("server started");
})