import React from "react";

// React Icons
import {SiAddthis} from 'react-icons/si'
import {AiFillPrinter,AiOutlineMore} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md'
import AddItemBtn from "./Actions/AddItem/AddItemBtn";

export default function InventoryHeader({currentCategory}) {

  return (
        <div className="flex items-center justify-between w-full h-[10%]">
            <h1 className='text-[1.5rem]'>{currentCategory} Items</h1>
            <div className="flex items-center">
                <AddItemBtn/>
                <div className="text-[1.3rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110">
                    <AiFillPrinter />
                </div>
                <div className="text-[1.3rem] text-[rgb(50,65,140)] mx-2 transition-all duration-300 hover:scale-110">
                    <MdDeleteForever />
                </div>
                <div className="text-[1.3rem] text-[rgb(50,65,140)]">
                    <AiOutlineMore />
                </div>
            </div>
        </div>
    );
}
  