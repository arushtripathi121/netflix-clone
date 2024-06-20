import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
    name: 'popularMovies',
    initialState : {
        currentlyPopularMovies: null,
    },
    reducers: {
        addPopularMovies: (state, action) => {
            state.currentlyPopularMovies = action.payload;
        }
    }
})

export const { addPopularMovies } = popularMoviesSlice.actions;
export default popularMoviesSlice.reducer;