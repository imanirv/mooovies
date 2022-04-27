/* eslint-disable @next/next/no-img-element */
import {MainLayout} from "../../components/layouts"
import { useFormik } from "formik"
import * as Yup from "yup"
import SendIcon from "../../components/icons/send"

import { useMoviesDispatcher } from "../../redux/reducers/movies/slice"
import { useTMDBDispatcher } from "../../redux/reducers/tmdb/slice"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { callAPITMDB } from "../../helpers/network"

import {Card} from "../../components/card"

const validationSchema = Yup.object({
    parameter: Yup.string().required()
})

const initialValues = {
    parameter: ""
}



const HomeContainer = () => {
    const {movies:{loading}} = useMoviesDispatcher();
    const {tmdb:{trendingMovies, upcomingMovies}, getTrendingMovies, getUpcomingMovies} = useTMDBDispatcher();

    const {push} = useRouter();
    const onSubmit = async (values) => {
           push(`/${values.parameter}`) 
    }
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    useEffect(() => {
        getUpcomingMovies()
        getTrendingMovies()
    },[]);


    return(
        <>
            {!loading ? (
            <MainLayout>
                <div className="search-section">
                    <img src="/images/bg.jpg" alt="" className="bg-image" />
                    <div className="content-section">
                        <div>
                            <h1>Welcome to mooovies</h1>
                            <p className="mt-1">get information about your favourite movies easily</p>  
                        </div>
                        <div>
                            <form action="" onSubmit={handleSubmit}>
                                <label htmlFor="" className="search">
                                    <input type="text" name="parameter"  placeholder="eg: moon knight" onChange={handleChange} autoComplete="off" />
                                    <button type="submit">
                                        <SendIcon />
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
              
                <div className="container">
                    <h4>Upcoming</h4>
                </div>
                <div className="container">
                    <div className="row card-list">
                        {upcomingMovies.map((item, i)=> {
                            return(
                                <Card key={i} id={item.id} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} title={item.title}/>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="container">
                    <h4>Trending</h4>
                </div>
                <div className="container">
                    <div className="row card-list">
                        {trendingMovies.map((item, i)=> {
                            return(
                                <Card key={i} id={item.id} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} title={item.title} />
                            )
                        })}
                        
                    </div>
                </div>
               
               
            </MainLayout>
            ) : (
                <div className="loading">
                    <p>now loading</p>
                </div>
            )}
        </>
    )
    
}

export default HomeContainer

