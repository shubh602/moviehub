import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/newmovieSlice";


const useNewMovies=()=>{
 
    const dispatch=useDispatch()

const fetching=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc',options);
       const json=await data.json()
       dispatch(addmovies(json.results))
}  
   
   useEffect(()=>{
       fetching()
   },[])

}


export default useNewMovies;