var mongoose =require("mongoose")

const itemSchma =new mongoose.Schema(
    {
        image: String,
        title :String,
        price: Number
        
    }
)
const itemModel =mongoose.model('items',itemSchma)
module.exports={itemModel}