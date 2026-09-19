import { createSlice } from "@reduxjs/toolkit";


const newMovie=createSlice({
    name:"newMovie",
    initialState:{
        movie:null
    },
    reducers:{
        addmovies:(state,action)=>{
          state.movie =action.payload
        },
        removemoives:(state,action)=>{
            state.movie.length=0;
        }
    }
})

export const {addmovies,removemoives}=newMovie.actions;
export default newMovie.reducer;