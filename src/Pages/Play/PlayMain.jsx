import useMovieVideo from "../../hooks/useMovieVideo";
import { Card_Img_CDN } from "../../utils/Constant";

const PlayMain = ({data}) => {
  
  const {id,original_title,overview,release_date,poster_path,tagline}=data
  const video=useMovieVideo(id)

  const {key}=video;

  return (
    <div className='mx-auto flex max-w-screen-2xl flex-col gap-5 px-4 pb-8 pt-24 sm:px-6 sm:pt-28 lg:flex-row lg:gap-8 lg:px-10'>
            
           <div className="w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-xl lg:w-8/12">
            <iframe 
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${key}?&controls=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
           </div>
        
           <div className="flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white sm:gap-6 sm:p-6 lg:w-4/12">
                  <span className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{original_title}</span>
                 
                  <span className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {overview}
                  </span>

                  <span className="flex items-start gap-4 sm:gap-5">
                      <img className="aspect-[2/3] w-24 shrink-0 rounded-lg object-cover sm:w-32" src={`${Card_Img_CDN}${poster_path}`} alt="" />
                      <span className="flex min-w-0 flex-1 flex-col justify-between gap-3 text-right">
                          <span className="font-extrabold">{tagline}</span>
                          <span className="text-xs font-bold">{release_date}</span>
                      </span>
                  </span>
                  
           </div>
    
    </div>
  )
}

export default PlayMain;    