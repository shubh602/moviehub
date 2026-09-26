import { createSlice } from "@reduxjs/toolkit";


const newMovie=createSlice({
    name:"newMovie",
    initialState:{
        movie:null,
        popular:null,
        toprated:null,
        upcoming:null,
        trailer:null
    },
    reducers:{
        addmovies:(state,action)=>{
          state.movie =action.payload
        },
        addPopularmovies:(state,action)=>{
          state.popular =action.payload
        },
        addTopRatedmovies:(state,action)=>{
          state.toprated =action.payload
        },
        addUpcoimingmovies:(state,action)=>{
          state.upcoming =action.payload
        },
        addTrailer:(state,action)=>{
          state.trailer=action.payload
        }
        
    }
})

export const {addmovies,addPopularmovies,addTopRatedmovies,addUpcoimingmovies,addTrailer}=newMovie.actions;
export default newMovie.reducer;