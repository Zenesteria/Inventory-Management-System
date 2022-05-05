import React from 'react'
import { useDispatch } from 'react-redux'
import { selectItems } from '../../../redux/inventorySlice'


export default function Checked() {
    const dispatch = useDispatch()

    const handleChecked = () => {
        dispatch(selectItems())
    }
  return (
    <input type='checkbox' className='selected' onClick={handleChecked}/>
  )
}
