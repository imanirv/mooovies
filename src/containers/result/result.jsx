import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/layouts";
import Loading from "../../components/elements/loading";
import ReactPaginate from 'react-paginate';
import { useMoviesDispatcher } from "../../redux/reducers/movies/slice";
import { Card } from "../../components/card";





const ResultContainer = ({data, total , isLoading, title}) => {
    const {push} = useRouter()
    const {getSearchResult} = useMoviesDispatcher()
    const totalPage = Math.ceil(total/10);
    
    const handlePageClick = (value) => {
        const page = value.selected + 1
        getSearchResult(title, page)
    }

   
    
    return (
            <MainLayout isSearch={true}>
                {isLoading ?   <Loading /> : ""}
                <div className="container mt-5">
                {/* <p>total results : {total}</p> */}
                    <div className="row justify-center card-list wrapped mt-5">
                        {data.map((item, i)=> {
                            return(
                                <Card key={i} imdbId={item.imdbID} src={item.Poster} title={item.Title}/>
                            )
                        })}
                        
                    </div>
                </div>
                <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                pageRangeDisplayed={5}
                pageCount={totalPage}
                marginPagesDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
                />
            </MainLayout>
            
    )
}


export default ResultContainer