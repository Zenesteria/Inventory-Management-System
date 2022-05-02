import React from 'react'
import {VscTriangleRight} from 'react-icons/vsc'


export default function NextArrow({onClick, className}) {
  return (
        <div className={className} onClick={onClick}>
            <VscTriangleRight className='text-[1.2rem] text-black'/>
        </div>
  )
}
