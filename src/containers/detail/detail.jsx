import { MainLayout } from "../../components/layouts"
import Loading from "../../components/elements/loading"
const DetailContainer = ({data, isLoading}) => {
    console.log(isLoading)

    if (!isLoading) {
        return(
            <MainLayout isSearch={true}>
                <div className="container mt-5">
                    <div className="detail mt-5">
                        <div className="imageWrapper">
                            <img src={data.Poster}/>
                        </div>
                        <div className="context">
                            <h1>{data.Title}</h1>
                            <div className="row align-center my-2">
                                <span>{data.Type}</span>
                                <div className="dot"></div>
                                <span>{data.Year}</span>
                                <div className="dot"></div>
                                <span>{data.Rated}</span>
                            </div>
                            
                            <p className="summary">{data.Plot}</p>
                        </div>
                    </div>
                    <div className="detail justify-between mt-5">
                        <div className="detail-item">
                            <p className="mb-1"><span className="bold">Writer: </span>{data.Writer}</p>
                            <p className="mb-1"><span className="bold">Director: </span>{data.Director}</p>
                            <p className="mb-1"><span className="bold">Actors: </span>{data.Actors}</p>
                        </div>
                        <div className="detail-item">
                            <p className="mb-1"><span className="bold">Runtime: </span>{data.Runtime}</p>
                            <p className="mb-1"><span className="bold">Language: </span>{data.Language}</p>
                            <p className="mb-1"><span className="bold">Country: </span>{data.Country}</p>
                        </div>
                        <div className="detail-item">
                            <p className="mb-1"><span className="bold">Awards: </span>{data.Awards}</p>
                            <p className="mb-1"><span className="bold">IMDB Votes: </span>{data.imdbVotes}</p>
                            <p className="mb-1"><span className="bold">Ratings: </span></p>
                            <ul className="ml-4">
                                {data.Ratings && data.Ratings.map((rating, i) => (
                                    <li key={i}>{rating.Source} - {rating.Value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }else{
        return(
           <Loading />
        )
    }
}

export default DetailContainer