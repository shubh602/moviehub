import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useState } from "react";



const useSearchMovie =(name)=>{

const [data,setData]=useState([])

const fetching=async()=>{
       const api=`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(name)}&include_adult=false&page=1`
    
       const data=await fetch(api,options);
       const json=await data.json()
       
       setData(json.results)
}  
   
   useEffect(()=>{
       fetching()
   },[name])

  return data;

}


export default useSearchMovie;