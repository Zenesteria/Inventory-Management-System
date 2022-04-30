import React from 'react'
import MenuSlider from './MenuSlider'

export default function Items() {
  return (
    <div className='relative w-full h-full px-10 flex flex-col z-50'>
        <div className="flex w-full h-[20vh] min-h-[200px] items-center justify-center">
            <h1 className='text-white font-semibold tracking-wide' style={{fontSize:'calc(1.5rem + 1.5vw)'}}>Items</h1>
        </div>
        <MenuSlider/>
        
    </div>
  )
}
