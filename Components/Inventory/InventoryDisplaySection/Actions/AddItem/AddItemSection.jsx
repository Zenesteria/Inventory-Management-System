import React from 'react'
import { useSelector } from 'react-redux'

export default function AddItemSection() {
    const addItemState = useSelector(state => state.Inventory.items.edit.addItem)
  return (
    <div className='hidden items-center justify-center absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.4)] z-[500]' style={{display:addItemState && 'flex'}}>
        <div className="flex flex-col justify-center items-center relative w-[70%] h-[50%] p-4 rounded-lg bg-white ">
            <h1 className='mb-3 font-bold text-[1.3rem]'>New Inventory Item</h1>
            <form action="" className='flex flex-wrap w-[70%] h-fit p-4 min-w-[300px]'>
                <div className="flex flex-col m-2 flex-1">
                    <label>Category</label>
                    <input type="text" className=' h-10 border-b-4  p-2' required/>
                </div>
                <div className="flex flex-col m-2 flex-1">
                    <label>Location</label>
                    <input type="text" className='h-10 border-b-4  p-2' required/>
                </div>
                <div className="flex flex-col m-2 flex-1">
                    <label>Quantity</label>
                    <input type="text" className='h-10 border-b-4  p-2' required/>
                </div>
                <div className="flex justify-end items-center absolute bottom-0 left-0 w-full h-[15%] mt-auto p-2 ">
                    <button className='m-3 px-7 py-2 rounded-md bg-green-800 text-white font-semibold hover:bg-green-900'>Save</button>
                    <button className='m-3 px-4 py-2 rounded-md border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white'>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}
