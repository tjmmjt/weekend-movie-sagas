import { useSelector } from "react-redux";

// TODO render MovieItemDetails

function MovieItemDetails() {
  // useSelector to retrieve Movie data
  const movieDetails = useSelector((store) => store.movieItemDetails);
  // console.log('Movie:', movieDetails)
  const movieGenres = useSelector((store) => store.genres);

  return movieDetails.map((movie) => (
    <div key={movie.id} className="container">
      <div className="header">
        <button>back to movie list</button>
        <h1>{movie.title}</h1>
      </div>
      <div className="movieImage">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="details">
        <h4>Genres: {movie.genres}</h4>
        <h3>Description:</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  ));
}

export default MovieItemDetails;
