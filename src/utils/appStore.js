import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import newMovieReducer from "./newmovieSlice"
import configReducer from "./configSlice";

const appstore=configureStore({
    reducer:{
        user:userReducer,
        newMovie:newMovieReducer,
        config:configReducer,
    }
})


export default appstore;