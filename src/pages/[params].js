import Head from "next/head";
import {useRouter} from "next/router"
import { useEffect, useState } from "react";
import { useMoviesDispatcher } from "../redux/reducers/movies/slice";
import ResultContainer from "../containers/result";

const Result = () => {
    const {movies: {searchResult,totalSearch, loading, status}, getSearchResult} = useMoviesDispatcher()
    const router = useRouter()
    const {params} = router.query

    useEffect(() => {
        if (router.isReady) {
            getSearchResult(params);
        }
    }, [router.isReady])
    
    const redirect = () => {
        if (typeof window !== "undefined") {
            window.location.href = "/404"
          }
    }

    if (status) {
        return(
            <>
                <Head>
                    <title>Mooovies - result</title>
                </Head>
                <ResultContainer data={searchResult} total={totalSearch} isLoading={loading} title={params} />
            </>
        )
    }else{
        redirect()
    }
}


export default Result