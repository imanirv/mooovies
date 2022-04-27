import { useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"
import { useMoviesDispatcher } from "../../redux/reducers/movies/slice"
import DetailContainer from "../../containers/detail"

const DetailMovie = () =>{
    const router = useRouter()
    const {movies: {detailMovie, loading}, getDetailMovie} = useMoviesDispatcher()
    const {id} = router.query

    useEffect(() => {
        if (router.isReady) {
            getDetailMovie(id)
        }
    }, [router.isReady])
    return(
        <DetailContainer data={detailMovie} isLoading={loading}/>
    )
}

export default DetailMovie