var mongoose =require('mongoose')
var {itemModel} =require("../models/itemCart")
var express =require('express')

const itemRouter =express.Router()

itemRouter.post('/add',async(req,res)=>{
    try {
        var itemData= new itemModel(req.body);
        var result= await itemData.save();
        res.json(result);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
})

itemRouter.get('/viewall',async(req,res)=>{
   try {var result =await itemModel.find();
    res.send(result);
       
   } catch (error) {
    console.log(error);
    res.status(500).send(error);
   }
})