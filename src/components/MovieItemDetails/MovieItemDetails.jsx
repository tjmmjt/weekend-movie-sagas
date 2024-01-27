import { useSelector } from "react-redux"

// TODO render MovieItemDetails
// useSelector to retrieve Movie data
function MovieItemDetails() {
    const movie = useSelector(store => store.movieItemDetails)
    console.log('movie details:', movie)
    return (
        <div className="header">
            <h1>Movie Details</h1>
            {/* <h2>{movie.title}</h2> */}
        </div>

    )
}

export default MovieItemDetails