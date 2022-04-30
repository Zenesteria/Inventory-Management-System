import {GoTriangleDown} from 'react-icons/go'

export default function UserInfoSec({display}) {
  return (
    <div className='w-full h-[50%] bg-gradient-to-b from-[rgb(198,170,239)] to-[rgb(223,184,238)] flex items-end'>
        <div className="flex w-full h-fit items-center justify-around py-7 text-white delay-200" style={{display:!display&&'none',width:!display&&'0'}}>
            <div className="flex flex-col">
                <h1 className='text-[1.3rem] font-semibold'>User Name</h1>
                <p className='text-[0.9rem] font-light'>Admin</p>
            </div>
            <GoTriangleDown className='text-[1.2rem]'/>
        </div>
    </div>
  )
}
