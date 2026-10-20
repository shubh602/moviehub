import useMovieVideo from "../../hooks/useMovieVideo";
import { Card_Img_CDN } from "../../utils/Constant";

const PlayMain = ({data}) => {
  
  const {id,original_title,overview,release_date,poster_path,tagline}=data
  const video=useMovieVideo(id)

  const {key}=video;

  return (
    <div className='pt-18 flex px-2 pb-8'>
            
           <div className="w-8/12">
            <iframe 
                className="w-full h-[600px] rounded-lg" 
                src={`https://www.youtube.com/embed/${key}?&controls=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
           </div>
        
           <div className="flex flex-col space-y-10 w-4/12 p-5">
                  <span className="text-4xl font-bold">{original_title}</span>
                 
                  <span className="text-sm">
                      {overview}
                  </span>

                  <span className="flex">
                      <img className="h-40 w-52 rounded-sm" src={`${Card_Img_CDN}${poster_path}`} alt="" />
                      <span className="flex flex-col pl-10 space-y-2 justify-between text-end"> 
                          <span className="font-extrabold">{tagline}</span>
                          <span className="text-xs font-bold">{release_date}</span>
                      </span>
                  </span>
                  
           </div>
    
    </div>
  )
}

export default PlayMain;    