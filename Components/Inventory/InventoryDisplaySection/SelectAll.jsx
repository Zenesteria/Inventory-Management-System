import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAll } from '../../../redux/inventorySlice'

export default function SelectAll() {
    const dispatch = useDispatch()
    const selectedAll = useSelector(state => state.Inventory.selected.selectedAll)
    // const [allSelected, setAllSelected] = useState(false)
    
    const handleClick = () => {
        dispatch(selectAll())
    }
  return <input type="checkbox" id='selectAll' checked={selectedAll ? true : false} onChange={handleClick} />
}
