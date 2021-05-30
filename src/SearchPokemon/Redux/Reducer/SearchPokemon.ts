//import { PokemonInterface } from "../../Components/SearchPokemon/SearchPokemon";
import * as actionTypes from "../Types/SearchPokemon";

interface State {
  loading: boolean;
  hasError: boolean;
  data: {};
}

export const initialState = {
  loading: false,
  hasError: false,
  data: {},
};

const SearchPokemon = (state: State = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SEARCH_POKEMON_REQUEST:
      return { ...state, hasError: false, loading: true };
    case actionTypes.SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        data: action.data,
        hasError: false,
        loading: false,
      };
    case actionTypes.SEARCH_POKEMON_ERROR:
      return { ...initialState, hasError: true, loading: false };
    default:
      return state;
  }
};

export default SearchPokemon;
