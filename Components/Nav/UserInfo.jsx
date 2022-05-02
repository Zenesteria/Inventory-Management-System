import React from 'react'
import { VscTriangleDown } from 'react-icons/vsc'


export default function UserInfo() {
  return (
    <div className='relative flex items-end w-full h-[50%] z-20 p-4 text-white' >
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url(\'/images/backdropfive.jpg\')', filter:'brightness(90%)'}}></div>
        
        <div className="flex justify-between items-center z-[40] w-full">
            <div className="flex flex-col">
                <h1 className='text-[1.5rem] font-bold'>User Name</h1>
                <p className='text-[0.9rem] font-light tracking-widest'>Admin</p>
            </div>
            <VscTriangleDown className='text-[1.2rem]'/>
        </div>
    </div>
  )
}
