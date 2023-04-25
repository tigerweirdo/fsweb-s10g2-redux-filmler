import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  console.log("böyle bi şey geldi:", action);
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE:
      const isAlreadyInFavorites = state.favorites.some(
        (movie) => movie.title === action.payload.title
      );
      if (isAlreadyInFavorites) {
        return state;
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }

    case REMOVE_FAVORITE:
      console.log("remove fav çalıştı");
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== parseInt(action.payload)
        ),
      };

    default:
      return state;
  }
};

export default favoritesReducer;