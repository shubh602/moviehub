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
    <div className="w-7/12 md:w-4/12 h-full absolute pt-28 md:pt-36 xl:pt-60 top-0 pl-6 lg:pl-8 text-white flex flex-col font-semibold bg-gradient-to-r from-black/60 to-transparent">
              <span className='text-xl md:text-2xl lg:text-6xl font-bold pb-2 md:pb-7 xl:pb-12'>{original_title}</span>
              
              <span className='text-[7px] lg:text-xs'>{overview}</span>

              <div className="flex pt-6 items-center space-x-10 text-md lg:text-2xl">
                
                   <button 
                   onClick={()=>handlePlay(id)}
                   className='bg-orange-600 text-white flex items-center space-x-2 px-4 lg:px-8 py-1 lg:py-3 rounded-xl cursor-pointer hover:opacity-80'>
                          <FontAwesomeIcon icon={faPlay} /><span> {langConstant[lang].play} </span>  
                   </button>

                   <button 
                    onClick={()=>setFlag(true)}
                   className='bg-white text-orange-600 flex items-center space-x-2 px-4 lg:px-8 py-1 lg:py-3 rounded-xl cursor-pointer hover:opacity-80'>
                           <FontAwesomeIcon icon={faCircleInfo} /><span>  {langConstant[lang].info} </span> 
                   </button>
              </div>
              <Info flag={flag} setFlag={setFlag} item={movieDetail} />
    </div>
  )
}


export default BackgroundText;