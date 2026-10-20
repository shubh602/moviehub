import { useSelector } from "react-redux"
import useMovieVideo from "../../hooks/useMovieVideo"
import { useEffect, useState } from "react"
import BackgroundVideo from "./BackgroundVideo"
import BackgroundText from "./BackgroundText"
import Secondary from "./Secondary"


const Main = () => {
const movieData=useSelector(store => store.newMovie.movie)
if(!movieData ) return

const movieDetail=movieData[1];
const {id}=movieDetail;





return (
   <div className='relative isolate h-[min(86svh,52rem)] min-h-[34rem] w-full bg-black text-white lg:h-dvh lg:min-h-[42rem]'>
         
          <BackgroundVideo id={id} />
          <BackgroundText movieDetail={movieDetail} />  

   </div>
  )
}

export default Main;