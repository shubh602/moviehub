import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { useState } from "react";



const useRecommended=(id)=>{

const [data,setData]=useState([])

const fetching=async()=>{
    //    const api=`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
       const api=`https://api.themoviedb.org/3/movie/${id}/recommendations?page=1`
       const data=await fetch(api,options);
       const json=await data.json()
       setData(json.results)
}  
   
   useEffect(()=>{
       fetching()
   },[id])

  return data;

}


export default useRecommended;