import { createSlice } from "@reduxjs/toolkit";
import Inventory from "../data/TableData";

const inventorySlice = createSlice({
    name:'Inventory',
    initialState:{
        DB:{
            isLoading: false,
            isLoaded: false,
            isCompleted: false,
            error: false
        },
        categories:{
            activeCategory:Inventory.map(category => Object.values(category)[0])[0],
        },
        items:Inventory.map(category => category),
        selected:0
    },
    reducers: {
        switchCategory: (state, action) => {
            state.categories.activeCategory = action.payload
        }
    },
});



export const {switchCategory} = inventorySlice.actions;
export default inventorySlice.reducer;