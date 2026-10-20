import { createSlice } from "@reduxjs/toolkit";


const Playlist=createSlice({
    name:"playlist",
    initialState:{
        list:[]
    },
    reducers:{
        addToList:(state,action)=>{
           state.list.push(action.payload)
        },
        removeFromList:(state,action)=>{
            state.list=state.list.filter(item => item.id !== action.payload)
        }
    }
})


export const {addToList,removeFromList}=Playlist.actions; 
export default Playlist.reducer;