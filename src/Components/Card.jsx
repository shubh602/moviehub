import { Card_Img_CDN } from "../utils/Constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay ,faAdd , faChevronCircleDown, faMinus} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Info from "./Info"
import { useDispatch } from "react-redux"
import { addToList, removeFromList } from "../utils/playlistSlice"

const Card = ({item,playlist=false}) => {
    const [flag,setFlag]=useState(false)
    const [hoverShow, setHoverShow]=useState(false)
    const {poster_path}=item;
    const navigation=useNavigate()
    const dispatch=useDispatch()

    const handleHoverShow=(state)=>{
      const hover= setTimeout(()=>{
          setHoverShow(state)
       },200)

    }

    const handlePlay=(item)=>{
        navigation(`/browser/play/${item.id}`)
    }

    const handlePlaylist=(item)=>{
         playlist? dispatch(removeFromList(item.id)) :dispatch(addToList(item))
    }


  return (
    <div className='relative w-fit flex flex-col shrink-0' 
         onMouseOver={()=>handleHoverShow(true)} 
         onMouseOut={()=>handleHoverShow(false)}
          >
            
          <img className='w-36 h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-lg transition-[width height] duration-500 hover:scale-110'
           src={`${Card_Img_CDN}${poster_path}`} 
           alt="" />
           
           <div className={`${!hoverShow?"hidden":"block"} -mt-8 flex items-center justify-between text-xl relative z-10 text-gray-400`}>

              <button 
              title="Play"
              onClick={()=>handlePlay(item)}
              className="border rounded-full px-0.5 hover:opacity-70 cursor-pointer">
                <FontAwesomeIcon icon={faPlay} />
              </button>
             
             <span className="flex items-center space-x-1.5">
                 <button title="Add To Playlist" onClick={()=>handlePlaylist(item)} 
                        className="border rounded-full px-0.5 hover:opacity-70 cursor-pointer">
                         <FontAwesomeIcon icon={playlist?faMinus:faAdd} />
                  </button>

                 <button title="Information"
                     onClick={()=>setFlag(true)}
                     className="text-3xl hover:opacity-70 cursor-pointer">
                     <FontAwesomeIcon icon={faChevronCircleDown} />
                 </button>  
             </span>

           </div>

           <Info flag={flag} setHoverShow={setHoverShow} setFlag={setFlag} item={item} />
    </div>
  )
}

export default Card;