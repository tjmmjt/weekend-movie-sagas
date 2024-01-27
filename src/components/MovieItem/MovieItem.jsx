import { useDispatch } from "react-redux";

function MovieItem({ movie }) {
  const dispatch = useDispatch();

    // handleClick() to send movieItem.id dispatch,
    // return movie details by id to store
    // then useHistory.push to MovieDetails which renders store on page

    const handleClick = () => {
        const payload = movie.id
        dispatch({type: 'FETCH_DETAILS', payload: payload})
    }

  return (
    <div onClick={handleClick} data-testid="movieItem" key={movie.id}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} />
    </div>
  );
}

export default MovieItem