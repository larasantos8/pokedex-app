import * as actionTypes from "../Types/SearchPokemon";
import { getPokemon } from "../API/SearchPokemon";

export const loadDataSearchedPokemon = (idPokemon: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.SEARCH_POKEMON_REQUEST,
    });
    try {
      const data = await getPokemon({ idPokemon });
      dispatch({
        data: data,
        type: actionTypes.SEARCH_POKEMON_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.SEARCH_POKEMON_ERROR,
      });
    }
  };
};
