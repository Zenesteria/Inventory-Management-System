import { createSlice } from "@reduxjs/toolkit";
import Inventory from "../data/TableData";
const userInv = Inventory.map(category => category)

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
        items:{
            inv: [...userInv]
        },
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
            let allSelected = true
            checkboxes.forEach(checkbox => {
                if(!checkbox.checked){
                    allSelected = false
                }
                checkbox.checked && sel++
            })
            state.selected.selectedItems = sel
            state.selected.selectedAll = allSelected
        },
        selectAll: (state, action) => {
            const checkboxes = document.querySelectorAll('.selected')
            const selectAllCheckBox = document.getElementById('selectAll')
            const sel = 0
            checkboxes.forEach(checkbox => {
                if(selectAllCheckBox.checked){
                    checkbox.checked = true
                    state.selected.selectedAll = true
                }
                else{
                    checkbox.checked = false
                    state.selected.selectedAll = false
                }
            })
            checkboxes.forEach(checkbox => {
                checkbox.checked && sel++
            })
            state.selected.selectedItems = sel
            
        },
        delItem:(state, action) => {
            const [currenCategory] = state.items.inv.filter(category => category.Category === action.payload.category)
            currenCategory.Items.splice(action.payload.index, 1)
        }
    },
});



export const {switchCategory, selectItems, selectAll, delItem} = inventorySlice.actions;
export default inventorySlice.reducer;