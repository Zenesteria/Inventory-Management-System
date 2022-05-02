import React from 'react'
import UserInfo from './UserInfo'

export default function Nav() {
  return (
    <div className='flex flex-col w-[30vw] min-w-[350px] h-full z-[999] shadow-[5px_3px_25px_rgb(0,0,0,.07)]'>
        <UserInfo/>
        <ul className='flex w-full h-full'>

        </ul>
    </div>
  )
}
