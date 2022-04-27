import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {callAPI, callAPITMDB} from "../../../helpers/network"


const initialState = {
    searchResult : [],
    status: true,
    totalSearch : 0,
    detailMovie : [],
    loading: false 
}

const slices = createSlice({
    initialState,
    name: 'movies',
    reducers: {
        setSearchRes(state, action){
            Object.assign(state, {
                ...state, 
                searchResult: action.payload
            })
        },
        setDetailMovie(state, action){
            Object.assign(state, {
                ...state, 
                detailMovie: action.payload
            })
        },
        setTotalSearch(state, action){
            Object.assign(state, {
                ...state, 
                totalSearch: action.payload
            })
        },
        toggleLoading(state, action){
            Object.assign(state, {
                ...state, 
                loading: action.payload
            })
        },
        setStatus(state, action){
            Object.assign(state, {
                ...state, 
                status: action.payload
            })
        }
    }
})

const {setSearchRes, setDetailMovie, setTotalSearch, setStatus, toggleLoading} = slices.actions

export const useMoviesDispatcher = () => {
    const {movies} = useSelector((state) => state);
    const dispatch = useDispatch();

    const getSearchResult = async (values, page = 1) => {
        dispatch(toggleLoading(true))
        const params = values
        
        const response = await callAPI({
            url:`/?apikey=7819d7f3&s=${params}&page=${page}`,
            method:'get'
        })

        if (response.data.Response == "True") {
            dispatch(setSearchRes(response.data.Search))
            dispatch(setTotalSearch(response.data.totalResults))
            dispatch(toggleLoading(false))
        }else{
            dispatch(toggleLoading(false))
            dispatch(setStatus(false))
        }
    
    }

    const getDetailMovie = async (values) => {
        dispatch(toggleLoading(true))
        const params = values
        
        const response = await callAPI({
            url:`/?apikey=7819d7f3&i=${params}`,
            method:'get'
        })
        dispatch(setDetailMovie(response.data))
        dispatch(toggleLoading(false))
    }

    return {
        movies,
        getSearchResult,
        getDetailMovie
    }
}

export default slices.reducer