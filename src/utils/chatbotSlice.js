import { createSlice } from "@reduxjs/toolkit";

const chatbot=createSlice({
    name:"chatbot",
    initialState:{
        chats:[]
    },
    reducers:{
        addChat:(state,action)=>{
            state.chats.push(action.payload)           
        }
    }
})


export const {addChat}=chatbot.actions;
export default chatbot.reducer;