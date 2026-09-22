import { Card_Img_CDN } from "../../utils/Constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay ,faAdd , faChevronCircleDown} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Card = ({item}) => {

    const [hoverShow, setHoverShow]=useState(false)
    const {poster_path}=item;

    const handleHoverShow=(state)=>{
       setTimeout(()=>{
          setHoverShow(state)
       },200)
    }

  return (
    <div className='flex flex-col shrink-0' 
         onMouseOver={()=>handleHoverShow(true)} 
         onMouseLeave={()=>handleHoverShow(false)}
          >
            
          <img className='w-36 h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-lg transition-[width height] duration-500 hover:scale-110'
           src={`${Card_Img_CDN}${poster_path}`} 
           alt="" />
           
           <div className={`${!hoverShow ? "hidden":"block"} -mt-8 flex items-center justify-between text-xl relative z-10`}>

              <span className="border rounded-full px-0.5 hover:opacity-70 cursor-pointer"><FontAwesomeIcon icon={faPlay} /></span>
             
             <span className="flex items-center space-x-1.5">
                 <span className="border rounded-full px-0.5 hover:opacity-70 cursor-pointer"><FontAwesomeIcon icon={faAdd} /></span>
                 <span className="text-3xl hover:opacity-70 cursor-pointer"><FontAwesomeIcon icon={faChevronCircleDown} /></span>  
             </span>

           </div>
    </div>
  )
}

export default Card