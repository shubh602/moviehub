import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import {addUpcoimingmovies } from "../utils/newmovieSlice";


const useUpcomingMovie=()=>{
 
    const dispatch=useDispatch()

const fetching=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options);
       const json=await data.json()
       dispatch(addUpcoimingmovies(json.results))
}  
   
   useEffect(()=>{
       fetching()
   },[])

}


export default useUpcomingMovie;