import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { langConstant } from "../../utils/langConstant";
import { useNavigate } from "react-router-dom";
import Info from "../../Components/Info";
import { useState } from "react";


const BackgroundText = ({movieDetail}) => {
    const [flag,setFlag]=useState(false)  
    const {original_title,overview,id}=movieDetail;
    const lang=useSelector(store => store.config.lang)
    const navigation=useNavigate()

      const handlePlay=(id)=>{
        navigation(`/browser/play/${id}`)
      }


  return (
    <div className="absolute left-0 top-0 flex h-full w-11/12 flex-col bg-gradient-to-r from-black/90 via-black/65 to-transparent px-5 pt-24 font-semibold text-white sm:w-8/12 sm:px-8 sm:pt-32 lg:w-6/12 lg:px-10 lg:pt-44 xl:pt-52">
              <span className='max-w-3xl break-words pb-3 text-2xl font-bold leading-tight sm:pb-5 sm:text-4xl lg:pb-8 lg:text-6xl'>{original_title}</span>
              
              <span className='line-clamp-4 max-w-2xl text-xs leading-relaxed text-white/85 sm:line-clamp-5 sm:text-sm lg:text-base'>{overview}</span>

              <div className="flex flex-wrap items-center gap-3 pt-5 text-sm sm:gap-4 sm:pt-7 sm:text-base lg:gap-5 lg:text-lg">
                
                   <button 
                   onClick={()=>handlePlay(id)}
                   className='flex min-h-11 items-center gap-2 rounded-xl bg-orange-600 px-4 py-2 text-white shadow-lg shadow-orange-950/30 transition-colors hover:bg-orange-500 sm:px-6 lg:px-7'>
                          <FontAwesomeIcon icon={faPlay} /><span> {langConstant[lang].play} </span>  
                   </button>

                   <button 
                    onClick={()=>setFlag(true)}
                   className='flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2 text-orange-700 shadow-lg transition-colors hover:bg-orange-50 sm:px-6 lg:px-7'>
                           <FontAwesomeIcon icon={faCircleInfo} /><span>  {langConstant[lang].info} </span> 
                   </button>
              </div>
              <Info flag={flag} setFlag={setFlag} item={movieDetail} />
    </div>
  )
}


export default BackgroundText;