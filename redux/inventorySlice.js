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
        selected:{
            selectedAll: false,
            selectedItems:0
        }
    },
    reducers: {
        switchCategory: (state, action) => {
            state.categories.activeCategory = action.payload
        },
        selectItems: state => {
            const checkboxes = document.querySelectorAll('.selected')
            const sel = 0
            let allSelected
            checkboxes.forEach(checkbox => {
                checkbox.checked && sel++
            })
            state.selected.selectedItems = sel
        },
        selectAll: (state, action) => {

        }
    },
});



export const {switchCategory, selectItems} = inventorySlice.actions;
export default inventorySlice.reducer;