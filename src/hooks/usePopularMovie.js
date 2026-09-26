import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularmovies } from "../utils/newmovieSlice";


const usePopularMovie=()=>{
 
    const dispatch=useDispatch()
    const popular=useSelector(store => store.newMovie.popular)

const fetching=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options);
       const json=await data.json()
       dispatch(addPopularmovies(json.results))
}  
   
   useEffect(()=>{
      !popular && fetching()
   },[])

}


export default usePopularMovie;