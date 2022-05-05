import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems } from '../../../redux/inventorySlice'

export default function SelectAll() {
    const dispatch = useDispatch()
    const selectedAll = useSelector(state => state.Inventory.selected.selectedAll)
    
    const selectAll = () => {
        
    }
  return <input type="checkbox" id='selectAll' onClick={selectAll} />
}
