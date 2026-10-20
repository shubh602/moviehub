import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import newMovieReducer from "./newmovieSlice"
import configReducer from "./configSlice";
import chatbotReducer from "./chatbotSlice";
import playlistReducer from './playlistSlice'

const appstore=configureStore({
    reducer:{
        user:userReducer,
        newMovie:newMovieReducer,
        config:configReducer,
        chatbot:chatbotReducer,
        playlist:playlistReducer,
        
    }
})


export default appstore;