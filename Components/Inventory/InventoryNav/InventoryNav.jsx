// Modules
import { useSelector } from "react-redux";



// Components
import Slider from "react-slick";
import ItemLink from "./InventoryNavLinks";
import NextArrow from "./NavigationArrows/NextArrow";
import PrevArrow from "./NavigationArrows/PrevArrow";



export default function InventoryNav() {
  const categories = useSelector(state => state.Inventory.items.map(category => category.Category))
    const settings = {
        dots:false,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode:true,
                dots: true,
                autoplay:true
              }
            }
          ]
      };
  return (
    <div className="relative flex items-center justify-center w-[70%] overflow-hidden h-[15%] mb-2 border-b-[1px] rounded-xl border-[#267c963d] shadow-[0_15px_25px_rgb(38,124,150,0.10)]">
           <div className="w-[80%] h-fit">
                <Slider {...settings}>
                  {categories.map((category,index) => {
                    return(
                      <ItemLink key={index} txt={category}/>
                    )
                  })}
                </Slider>
           </div>
    </div>
  )
}

