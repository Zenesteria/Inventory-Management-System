import React from 'react'
import ItemsList from './ItemsList'
import ItemsNav from './ItemsNav'
import Pagination from './Pagination'

export default function Items() {
  return (
    <div className='relative flex flex-col items-center w-full h-full px-5 pb-4 z-50'>
        <div className="flex items-center justify-center w-full h-[23vh] min-h-[180px]">
            <h1 className='text-white font-bold text-[2.5rem]'>Inventory</h1>
        </div>
        <ItemsNav/>
        <ItemsList/>
        <Pagination/>
    </div>
  )
}
