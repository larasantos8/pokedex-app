import { PokemonProps } from "../../../Pokedex/Components/Pokedex";
import * as actionTypes from "../Types/SearchPokemon";

interface State {
  loading: boolean;
  hasError: boolean;
  data: PokemonProps | {};
  dataList: Array<PokemonProps>;
}

export const initialState = {
  loading: false,
  hasError: false,
  data: {},
  dataList: [],
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

    case actionTypes.LOAD_POKEMON_LIST_REQUEST:
      return { ...state, hasError: false, loading: true };
    case actionTypes.LOAD_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        dataList: [...state.dataList, ...action.data],
        data: {},
        hasError: false,
        loading: false,
      };
    case actionTypes.LOAD_POKEMON_LIST_ERROR:
      return { ...initialState, hasError: true, loading: false };
    case actionTypes.CLEAR_POKEMON_LIST:
      return {
        ...state,
        dataList: [],
        data: {},
        hasError: false,
        loading: false,
      };
    case actionTypes.SEARCH_AND_CAPTURE_POKEMON_REQUEST:
      return { ...state, hasError: false, loading: true };
    case actionTypes.SEARCH_AND_CAPTURE_ERROR:
      return { ...initialState, hasError: true, loading: false };
    default:
      return state;
  }
};

export default SearchPokemon;
