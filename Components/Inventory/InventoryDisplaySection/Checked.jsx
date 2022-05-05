import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedItems } from '../../../redux/inventorySlice'


export default function Checked() {
    const dispatch = useDispatch()
    const selectedItems = useSelector(state => state.Inventory.selected)

    const handleChecked = () => {
        const checkboxes = document.querySelectorAll('.selected')
        const selected = selectedItems
        checkboxes.forEach(checkbox => checkbox.checked && selected++)
        dispatch(selectedItems(selected))
    }
  return (
    <input type='checkbox' className='selected' onClick={handleChecked}/>
  )
}
