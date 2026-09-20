import { useSelector } from "react-redux"
import useMovieVideo from "../../hooks/useMovieVideo"
import { useEffect, useState } from "react"
import BackgroundVideo from "./BackgroundVideo"
import BackgroundText from "./BackgroundText"


const Main = () => {
const movieData=useSelector(store => store.newMovie.movie)
if(!movieData ) return

const movieDetail=movieData[15];
const {id}=movieDetail;
console.log(movieDetail);





return (
   <div className='w-full h-dvh'>

          <BackgroundVideo id={id} />
          <BackgroundText movieDetail={movieDetail} />     

   </div>
  )
}

export default Main