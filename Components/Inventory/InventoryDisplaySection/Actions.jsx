import React from 'react'


// React Icons
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'


export default function Actions({index}) {
    
    // Event Handlers
    const handleEdit = () => {
        const currentRow = document.querySelectorAll("[role='row']")[index + 1]
        console.log(currentRow)
    }

    return (
        <div className='flex w-full items-center'>
            <BsFillPencilFill className='mr-4 text-[1.1rem] cursor-pointer transition-all duration-300 hover:rotate-[15deg]' onClick={handleEdit} />
            <AiFillDelete className='text-[1.2rem] cursor-pointer hover:text-red-700'/>
        </div>
    );
}


