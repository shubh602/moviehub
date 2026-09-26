import { useEffect } from "react"
import useMovieVideo from "../../hooks/useMovieVideo"
import useTrailer from "../../hooks/useTrailer"
import { useSelector } from "react-redux"

const BackgroundVideo = ({id}) => {

  const video=useSelector(store=>store.newMovie.trailer)
  
  useTrailer(id) 
  if(!video) return
  const {key}=video  
  return (
    <div className="z-0 overflow-hidden h-[360px] lg:h-dvh w-full">

         <iframe 
            className="w-full h-[100%] scale-160 pointer-events-none" 
            src={`https://www.youtube.com/embed/${key}?si=qXA80StL9tu4DyMa&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         />

    </div>
  )
}

export default BackgroundVideo