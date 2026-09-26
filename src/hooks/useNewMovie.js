import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addmovies } from "../utils/newmovieSlice";


const useNewMovies=()=>{
 
    const dispatch=useDispatch()
    const movie=useSelector(store => store.newMovie.movie)

const fetching=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options);
       const json=await data.json()
       dispatch(addmovies(json.results))
}  
   
   useEffect(()=>{
      !movie && fetching()
   },[])

}


export default useNewMovies;