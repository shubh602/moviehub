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
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">

         <iframe 
            className="pointer-events-none h-full w-full scale-150 sm:scale-125 lg:scale-110"
            src={`https://www.youtube.com/embed/${key}?si=qXA80StL9tu4DyMa&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         />

    </div>
  )
}

export default BackgroundVideo