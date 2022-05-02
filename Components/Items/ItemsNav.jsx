import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default function ItemsNav() {
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
                    <ItemLink txt='Household'/>
                    <ItemLink txt='Work'/>
                    <ItemLink txt='Club'/>
                    <ItemLink txt='Miscellaneous'/>
                </Slider>
           </div>
    </div>
  )
}

const ItemLink = ({txt, total}) => {
    return(
        <div className="flex items-center justify-center mx-2 mt-2">
            <h3 className="text-[0.9rem] cursor-pointer hover:scale-110 transition-all duration-300 text-blue-900">{txt} [{total > 0 ? total:'0'}]</h3>
        </div>
    )
}