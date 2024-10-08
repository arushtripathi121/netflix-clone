import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        moviesToWatch: null,
        trendingMovies: null,
        popularMovies: null,
        trendingShows: null,
        trendingContent: null,
        movieForDisplay: null,
        recomendedMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMoviesToWatch: (state, action) => {
            state.moviesToWatch = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingShows: (state, action) => {
            state.trendingShows = action.payload;
        },
        addTrendingContent: (state, action) => {
            state.trendingContent = action.payload;
        },
        addMovieForDisplay: (state, action) => {
            state.movieForDisplay = action.payload;
        },
        addRecomendedMovies: (state, action) => {
            state.recomendedMovies = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addMoviesToWatch, addTrailerVideo, addTrendingMovies, addPopularMovies, addTrendingShows, addTrendingContent, addMovieForDisplay, addRecomendedMovies } = movieSlice.actions;
export default movieSlice.reducer;
