import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import movies from "./reducers/movies";
import tmdb from "./reducers/tmdb"

const rootReducers = combineReducers({
    movies,
    tmdb
});


const store = configureStore({
    reducer: rootReducers
})

export default store