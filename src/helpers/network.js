import axios from "axios";

export const callAPI = async(payload) => {
    const  axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL
    })
    try {
        const response = await axiosInstance(payload)
        return response
    } catch (error) {
        console.log(error)
    }
}
export const callAPITMDB = async(payload) => {
    const  axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_TMDB
    })
    try {
        const response = await axiosInstance(payload)
        return response
    } catch (error) {
        console.log(error)
    }
}