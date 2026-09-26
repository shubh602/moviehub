import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import newMovieReducer from "./newmovieSlice"
import configReducer from "./configSlice";
import chatbotReducer from "./chatbotSlice";

const appstore=configureStore({
    reducer:{
        user:userReducer,
        newMovie:newMovieReducer,
        config:configReducer,
        chatbot:chatbotReducer,
        
    }
})


export default appstore;