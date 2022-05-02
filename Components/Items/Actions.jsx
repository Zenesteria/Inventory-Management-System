import React from 'react'
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

export default function Actions() {
    return (
        <div className='flex w-full items-center text-[1.1rem]'>
            <BsFillPencilFill className='mr-4' />
            <AiFillDelete/>
        </div>
    );
}


