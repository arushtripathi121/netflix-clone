import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from './movieSlice';
import popularMoviesReducer from "./popularMoviesSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        popularMovies: popularMoviesReducer,
    },
})

export default appStore;