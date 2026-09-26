import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import {addTopRatedmovies } from "../utils/newmovieSlice";


const useTopRatedMovie=()=>{
 
    const dispatch=useDispatch()
    const toprated=useSelector(store => store.newMovie.toprated)

const fetching=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options);
       const json=await data.json()
       dispatch(addTopRatedmovies(json.results))
}  
   
   useEffect(()=>{
      !toprated && fetching()
   },[])

}


export default useTopRatedMovie;