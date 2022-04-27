import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPITMDB } from "../../../helpers/network";

const initialState = {
    trendingMovies : [],
    upcomingMovies: [],
    loading: false
}

const slices = createSlice({
    initialState,
    name: 'tmdb',
    reducers: {
        setTrending(state, action){
            Object.assign(state, {
                ...state, 
                trendingMovies: action.payload
            })
        },
        setUpcoming(state, action){
            Object.assign(state, {
                ...state, 
                upcomingMovies: action.payload
            })
        },
        
    }
})

const {setTrending, setUpcoming} = slices.actions

export const useTMDBDispatcher = () => {
    const {tmdb} = useSelector((state) => state);
    const dispatch = useDispatch();


    const getTrendingMovies = async() => {
        const response = await callAPITMDB({
            url: '/trending/all/day?api_key=091e7e04d25b795273fd36442091d0f2',
            method: 'get'
        })
        const payload = response.data.results
        // console.log(response)
        dispatch(setTrending(payload))
    }
    const getUpcomingMovies = async() => {
        const response = await callAPITMDB({
            url: '/movie/upcoming?api_key=091e7e04d25b795273fd36442091d0f2&language=en-US&page=1',
            method: 'get'
        })
        const payload = response.data.results
        // console.log(response)
        dispatch(setUpcoming(payload))
    }

    

    return {
        tmdb,
        getTrendingMovies,
        getUpcomingMovies
    }
}

export default slices.reducer