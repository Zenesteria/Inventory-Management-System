import Nav from "../Components/Nav/Nav"
import Items from '../Components/Items/Items'

export default function Inventory() {
  return (
    <div className="flex relative w-full h-screen">
        <div className="absolute top-0 right-0 w-full h-[20vh] min-h-[200px] bg-gradient-to-b from-[rgb(106,176,226)]"></div>
        <Nav/>
        <Items/>
    </div>
  )
}
