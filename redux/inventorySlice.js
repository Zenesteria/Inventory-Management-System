import { createSlice } from "@reduxjs/toolkit";
import Inventory from "../data/TableData";

const inventorySlice = createSlice({
    name:'Inventory',
    initialState:{
        categories:Inventory.map(category => category.Category) || '',
        items:Inventory.map(category => category.Items),
        selected:0,
        total:Inventory[0].Items.length,
    },
    reducers: {
        switchCategory: (state, action) => {
            state.category = action.payload
        }
    },
});



export const {switchCategory} = inventorySlice.actions;
export default inventorySlice.reducer;