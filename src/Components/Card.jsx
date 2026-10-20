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
    <div className='group relative flex w-32 shrink-0 flex-col snap-start overflow-hidden rounded-xl bg-zinc-900 shadow-lg shadow-black/20 sm:w-40 md:w-48 lg:w-56 xl:w-64'
         onMouseOver={()=>handleHoverShow(true)} 
         onMouseOut={()=>handleHoverShow(false)}
          >
            
          <img className='aspect-[2/3] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]'
           src={`${Card_Img_CDN}${poster_path}`} 
           alt="" />
           
           <div className={`${!hoverShow?"flex sm:hidden":"flex"} absolute inset-x-2 bottom-2 z-10 items-center justify-between rounded-xl border border-white/10 bg-black/75 p-2 text-lg text-white shadow-lg backdrop-blur-md sm:inset-x-3 sm:bottom-3 sm:p-2.5 sm:text-xl`}>

              <button 
              title="Play"
              onClick={()=>handlePlay(item)}
              className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 transition-colors hover:bg-orange-600 cursor-pointer">
                <FontAwesomeIcon icon={faPlay} />
              </button>
             
             <span className="flex items-center space-x-1.5">
                 <button title="Add To Playlist" onClick={()=>handlePlaylist(item)} 
                        className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 transition-colors hover:bg-orange-600 cursor-pointer">
                         <FontAwesomeIcon icon={playlist?faMinus:faAdd} />
                  </button>

                 <button title="Information"
                     onClick={()=>setFlag(true)}
                     className="grid size-10 place-items-center rounded-full text-4xl transition-colors hover:bg-white/10 hover:text-orange-400 cursor-pointer">
                     <FontAwesomeIcon icon={faChevronCircleDown} />
                 </button>  
             </span>

           </div>

           <Info flag={flag} setHoverShow={setHoverShow} setFlag={setFlag} item={item} />
    </div>
  )
}

export default Card;