import { createSlice } from "@reduxjs/toolkit";


const config=createSlice({
    name:'config',
    initialState:{
        lang:"en"
    },
    reducers:{
        updatelang:(state,action)=>{
            state.lang=action.payload
        }
    }
}) 


export const {updatelang}=config.actions
export default config.reducer