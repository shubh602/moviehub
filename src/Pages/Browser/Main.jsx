import { useSelector } from "react-redux"
import useMovieVideo from "../../hooks/useMovieVideo"
import { useEffect, useState } from "react"
import BackgroundVideo from "./BackgroundVideo"
import BackgroundText from "./BackgroundText"
import Secondary from "./Secondary"


const Main = () => {
const movieData=useSelector(store => store.newMovie.movie)
if(!movieData ) return

const movieDetail=movieData[18];
const {id}=movieDetail;





return (
   <div className='w-full h-dvh bg-black text-white'>
         
          <BackgroundVideo id={id} />
          <BackgroundText movieDetail={movieDetail} />  

   </div>
  )
}

export default Main;