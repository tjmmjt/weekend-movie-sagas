import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// ! SAGAS
// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_DETAILS", fetchDetails);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get("/api/movies");
    // Set the value of the movies reducer:
    yield put({
      type: "SET_MOVIES",
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}

// TODO setup gen function to Fetch movie details by id
// initialize detailsResponse to GET details by ID via /api/details/:id===(action.payload)
function* fetchDetails(action) {
  try {
    const detailsResponse = yield axios.get(`/api/details/${action.payload}`);
    // console.log('fetchDetails action payload:', action.payload); // // test to make sure action.payload === movie.id
    console.log("detailsResponse:", detailsResponse.data); // // test details response === specific movie
    // PUT/SET_DETAILS Store to detailsReponse
    yield put({ type: "SET_DETAILS", payload: detailsResponse.data });
  } catch (err) {
    alert("Error fetching movie details:", err);
  }
}

// ! STORE
// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store movie details
const movieItemDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// ! combine reducers
// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieItemDetails
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
