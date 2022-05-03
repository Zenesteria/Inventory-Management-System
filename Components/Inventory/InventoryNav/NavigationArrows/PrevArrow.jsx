import React from 'react'
import {VscTriangleLeft} from 'react-icons/vsc'


export default function NextArrow({onClick,className}) {
  return (
        <div className={className} onClick={onClick}>
            <VscTriangleLeft className='text-[1.2rem] text-black'/>
        </div>
  )
}

