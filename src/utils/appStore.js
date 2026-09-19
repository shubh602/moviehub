import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import newMovieReducer from "./newmovieSlice"

const appstore=configureStore({
    reducer:{
        user:userReducer,
        newMovie:newMovieReducer,
    }
})


export default appstore;