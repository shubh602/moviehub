import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { useState } from "react";



const useSearchById=(id)=>{

const [data,setData]=useState([])

const fetching=async()=>{
       const api=`https://api.themoviedb.org/3/movie/${id}`
       
       const data=await fetch(api,options);
       const json=await data.json()
       setData(json)
}  
   
   useEffect(()=>{
       fetching()
   },[id])

  return data;

}


export default useSearchById;