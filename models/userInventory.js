import mongoose from "mongoose";

const {Schema} = mongoose;

const userInventorySchema = new Schema({
    userId:String,
    categories:[{
        categoryName:String,
        items:[
            {
                name:String,
                location:String,
                quantity:Number,
                dateAdded:Date
            }
        ]
    }]

},{timestamps:true});



export default mongoose.models.Inventory || mongoose.model('Inventory',userInventorySchema);