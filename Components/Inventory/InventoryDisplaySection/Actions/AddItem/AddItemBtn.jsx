import React from 'react'


// Icons
import {SiAddthis} from 'react-icons/si'

export default function AddItemBtn() {
  const handleAdd = () => {
      
  }
  return (
    <div className="text-[1rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110">
        <SiAddthis onClick={handleAdd}/>
    </div>
  )
}
