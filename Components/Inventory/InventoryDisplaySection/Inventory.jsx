import React from 'react'



// Components
import InventoryList from './InventoryList'
import InventoryNav from '../InventoryNav/InventoryNav'
import Pagination from './InventoryPagination'

export default function Inventory() {
  return (
    <div className='relative flex flex-col items-center w-full h-full px-5 pb-4 z-50'>
    
        <div className="flex items-center justify-center w-full h-[23vh] min-h-[180px]">
            <h1 className='text-white font-bold text-[2.5rem]'>Inventory</h1>
        </div>

        <InventoryNav/>
        <InventoryList/>
    </div>
  )
}
