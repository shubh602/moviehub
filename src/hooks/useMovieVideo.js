import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { useState } from "react";



const useMovieVideo=(id)=>{

const [data,setData]=useState([])

const fetching=async()=>{
       const api=`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
       
       const data=await fetch(api,options);
       const json=await data.json()
       const filterData=json.results.filter((res) => res.type == "Trailer")
       setData(filterData?filterData[0]:json.results[0])
}  
   
   useEffect(()=>{
       fetching()
   },[id])

  return data;

}


export default useMovieVideo;