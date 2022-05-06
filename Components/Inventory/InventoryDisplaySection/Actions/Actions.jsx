import React from 'react'


// React Icons
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { delItem } from '../../../../redux/inventorySlice'


export default function Actions({index}) {
    const dispatch = useDispatch()
    const Inventory = useSelector(state => state.Inventory)
    const category = Inventory.categories.activeCategory
    // Event Handlers
    const handleDelete = () => {
        const currentRow = document.querySelectorAll("[role='row']")[index + 1]
        console.log(currentRow)
        console.log(category)
        dispatch(delItem({index, category}))
    }

    return (
        <div className='flex w-full items-center'>
            {/* <BsFillPencilFill className='mr-4 text-[1.1rem] cursor-pointer transition-all duration-300 hover:rotate-[15deg]' onClick={handleEdit} /> */}
            <AiFillDelete className='text-[1.2rem] ml-[1rem] cursor-pointer hover:text-red-700' style={{color:category === 'Household' ?'red' : 'green'}} onClick={handleDelete}/>
        </div>
    );
}


