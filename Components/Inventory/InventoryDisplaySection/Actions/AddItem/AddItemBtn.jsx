import React from 'react'


// Icons
import {SiAddthis} from 'react-icons/si'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../../../redux/inventorySlice'

export default function AddItemBtn() {
  const dispatch = useDispatch()
  const handleAdd = () => {
      dispatch(addItem())
  }
  return (
    <div className="text-[1rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110 cursor-pointer">
        <SiAddthis onClick={handleAdd}/>
    </div>
  )
}
