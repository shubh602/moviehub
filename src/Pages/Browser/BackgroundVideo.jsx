import useMovieVideo from "../../hooks/useMovieVideo"

const BackgroundVideo = ({id}) => {

  const video=useMovieVideo(id)

  if(!video) return
  const {key}=video
   
  return (
    <div className="z-0 overflow-hidden h-dvh w-full">

         <iframe 
            className="w-full h-[100%] scale-160 pointer-events-none" 
            src={`https://www.youtube.com/embed/${key}?si=qXA80StL9tu4DyMa&autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         />

    </div>
  )
}

export default BackgroundVideo