import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  //console.log("böyle bi şey geldi:", action);
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(
          (item) => parseInt(action.payload) !== item.id
        ),
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [...movies, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;