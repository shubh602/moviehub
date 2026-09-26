import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTrailer } from "../utils/newmovieSlice";



const useTrailer=(id)=>{

const [data,setData]=useState([])
const trailer=useSelector(store=>store.newMovie.trailer)
const dispatch= useDispatch()

const fetching=async()=>{
       const api=`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
       
       const data=await fetch(api,options);
       const json=await data.json()
       const filterData=await json.results.filter((res) => res.type == "Trailer")
       setData()

       dispatch(addTrailer(filterData?filterData[0]:json.results[0]))
}  
   
   useEffect(()=>{
      !trailer && fetching()
   },[id])



}


export default useTrailer;