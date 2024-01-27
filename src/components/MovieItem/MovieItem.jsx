import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieItem({ movie }) {
  const dispatch = useDispatch();
    const history = useHistory()
    // handleClick() to send movieItem.id dispatch,
    // return movie details by id to store
    // then useHistory.push to MovieDetails which renders store on page

    const handleClick = () => {
        const payload = movie.id
        dispatch({type: 'FETCH_DETAILS', payload: payload})
        history.push('/MovieItemDetails')
    }

  return (
    <div onClick={handleClick} data-testid="movieItem" key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} data-testid="toDetails"/>
    </div>
  );
}

export default MovieItem