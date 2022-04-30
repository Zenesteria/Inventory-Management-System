import {FaBars,FaUserAlt,FaSitemap,FaTruck,FaShoppingCart,FaSyncAlt} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import { useState } from 'react'
import UserInfoSec from "./UserInfo"
import Link from 'next/link'

export default function NavBar() {
  const [display, setDisplay] = useState(true)
  const handleClick = () => {
      if(display){
        setDisplay(false);
      }
      else{
        setDisplay(true);
      }
  }
  return (
    <div className='relative shadow-[2px_3px_25px_rgb(101,101,101,.16)] bg-white z-50 overflow-hidden' style={{width:display ?'340px':'50px'}}>
        <FaBars className='cursor-pointer text-[2rem] text-white absolute left-[5%] top-[2%]' onClick={handleClick}/>
        <div className="flex flex-col w-full h-full">
            <UserInfoSec display={display}/>
            <div className="text-[rgb(101,101,101)] h-full w-full" style={{padding:display&&'1.75rem'}}>
                <h3 className='text-[1rem] font-semibold mb-7' style={{display:!display&&'none'}}>Navigation</h3>
                <ul className='w-full p-2 min-w-[40px] flex flex-col items-center' style={{padding:display&&'0 0 0 1.25rem'}}>
                    <NavLink Icon={AiFillHome} txt='Home' display={display} path='/'/>
                    <NavLink Icon={FaUserAlt} txt='Users' display={display} path='/'/>
                    <NavLink Icon={FaUserAlt} txt='Suppliers' display={display} path='/'/>
                    <NavLink Icon={FaSitemap} txt='Items' display={display} path='/'/>
                    <NavLink Icon={FaTruck} txt='Item In' display={display} path='/'/>
                    <NavLink Icon={FaShoppingCart} txt='Item Out' display={display} path='/'/>
                    <NavLink Icon={FaSyncAlt} txt='Database Sync' display={display} path='/'/>
                </ul>
            </div>
        </div>
    </div>
  )
}


const NavLink = ({Icon, txt, path, display}) => {
    return(
      <Link href={path} passHref>
          <li className='flex w-full my-6 group cursor-pointer'>
            <Icon className='text-[1.2rem] min-w-[30px] mr-10 group-hover:scale-110'/>
            <p className='group-hover:ml-2 group-hover:underline border-[rgb(0,0,0)]' style={{transform:!display&&'scaleX(0)',display:!display&&'none'}}>{txt}</p>
          </li>
      </Link>
      
    )
}
