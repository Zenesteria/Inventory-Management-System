import { useDispatch, useSelector } from "react-redux";
import { switchCategory } from "../../../redux/inventorySlice";


const InventoryNavLinks = ({txt, total}) => {
    const dispatch = useDispatch()
  
    // Event Handlers
    const handleClick = () => { 
        dispatch(switchCategory(txt))
    }
  
      return(
          <div className="flex items-center justify-center mx-2 mt-2">
              <h3 className="text-[0.9rem] cursor-pointer hover:scale-110 transition-all duration-300 text-blue-900" onClick={handleClick}>{txt} [{total > 0 ? total:'0'}]</h3>
          </div>
      )
}


export default InventoryNavLinks