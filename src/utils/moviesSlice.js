import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlaying : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopular : (state, action) => {
            state.popularMovies = action.payload
        },

        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addTopRated : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcoming : (state, action) => {
            state.upcomingMovies = action.payload
        },
    },
})
export const {addNowPlaying, addPopular,addTrailerVideo, addTopRated, addUpcoming} = moviesSlice.actions;
export default moviesSlice.reducer;