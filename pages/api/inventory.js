import dbConnect from "../../util/mongo";
import Inventory from '../../models/userInventory'


export default async function handler(req,res){
    const {method} = req;

    await dbConnect()

    switch(method){
        case 'GET':
            try {
                const inventorydata = await Inventory.find();
                return res.status(200).json({success:true, data:inventorydata}); 
            } catch (err) {
                return res.status(400).json({success: false});
            }
        case 'POST':
            try {
                const addedItem = await Inventory.create(req.body)
                return res.status(201).json({success:true, data:addedItem})
            } catch (err) {
                return res.status(400).json({success:false})
            }
    }
}