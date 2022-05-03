import { createSlice } from "@reduxjs/toolkit";
import Inventory from "../data/TableData";

const inventorySlice = createSlice({
    name:'Inventory',
    initialState:{
        category:Inventory[0].Category || '',
        items:Inventory[0].Items || [],
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