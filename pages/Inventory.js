import Items from "../Components/Items";
import NavBar from '../Components/Nav/NavBar'

export default function Inventory() {
  return (
    <div className='w-full h-screen relative flex'>
          <div className="absolute top-0 left-0 w-full h-[20vh] min-h-[200px] bg-gradient-to-b from-[rgb(130,75,196)] to-[rgb(183,101,210)]"></div>
          <NavBar/>
            
          <Items/>
    </div>
  )
}
