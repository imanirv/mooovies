import { callAPITMDB } from "../../helpers/network"
import BrokenImage from "../icons/broken-image"

const getDetail = async (id, imdbId) => {
    if (imdbId != "") {
        window.location.href = `/detail/${imdbId}`
    }else{
        const response = await callAPITMDB({
            url:`/movie/${id}?api_key=091e7e04d25b795273fd36442091d0f2&language=en-US`,
            method:'get'
        });

        window.location.href = `/detail/${response.data.imdb_id}`
    }
}

const UndefinedImage = () => {
    return(
        <div className="undefined">
            <BrokenImage />
            <span>Poster Not Available</span>
        </div>
    )
}

const Card = ({id = "", src, imdbId = "", title}) => {
    
    return (
        <div className="card-wrapper">
            <div  className="card" onClick={() => getDetail(id, imdbId)}>
                {
                    src != 'N/A' ? (
                        <img src={src} alt="poster" />
                    ):(
                        <UndefinedImage />
                    )
                }
            </div>
            <p>{title}</p>
        </div>
    )
}

export default Card