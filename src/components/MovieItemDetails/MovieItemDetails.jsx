import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// TODO render MovieItemDetails

function MovieItemDetails() {
  // useSelector to retrieve Movie data
  const movieDetails = useSelector((store) => store.movieItemDetails);
  // console.log('Movie:', movieDetails)
  const history = useHistory()

  // handle button to return to MoviesList
  const handleClick = () => {
    history.push('/')
  }

  return movieDetails.map((movie) => (
    <div key={movie.id} className="container">
      <div className="header">
        <button onClick={handleClick}>back to movie list</button>
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
