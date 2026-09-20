import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faCircleInfo} from "@fortawesome/free-solid-svg-icons";


const BackgroundText = ({movieDetail}) => {

    const {original_title,overview}=movieDetail;

  return (
    <div className="w-4/12 h-full absolute pt-72 top-0 pl-20 text-white flex flex-col font-semibold bg-gradient-to-r from-black/60 to-transparent">
              <span className='text-6xl font-bold pb-12'>{original_title}</span>
              
              <span className='text-xs'>{overview}</span>

              <div className="flex pt-6 items-center space-x-10">
                
                   <button className='bg-white flex items-center space-x-2 text-2xl px-8 py-3 text-gray-900 rounded-xl cursor-pointer hover:opacity-80'>
                          <FontAwesomeIcon icon={faPlay} /><span>  Play</span>  
                   </button>

                   <button className='bg-white flex items-center space-x-2 text-2xl px-8 py-3 text-gray-900 rounded-xl cursor-pointer hover:opacity-80'>
                           <FontAwesomeIcon className="text-gray-500" icon={faCircleInfo} /><span>  Info</span> 
                   </button>
              </div>
    </div>
  )
}


export default BackgroundText;