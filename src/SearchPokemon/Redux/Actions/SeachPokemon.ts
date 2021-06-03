import * as actionTypes from "../Types/SearchPokemon";
import * as actionsPokedex from "../../../Pokedex/Redux/Actions/Pokedex";
import {
  getPokemon,
  GetPokemonProps,
  GetPokemonListProps,
  getPokemonList,
} from "../API/SearchPokemon";

export const getPokemonByID = ({ pokemonIdentifier }: GetPokemonProps) => {
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.SEARCH_POKEMON_REQUEST,
    });
    try {
      const data = await getPokemon({ pokemonIdentifier });
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

export const searchAndCapturePokemon = ({
  pokemonIdentifier,
}: GetPokemonProps) => {
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.SEARCH_AND_CAPTURE_POKEMON_REQUEST,
    });
    try {
      const data = await getPokemon({ pokemonIdentifier });

      dispatch(actionsPokedex.capturePokemon(data));
    } catch (err) {
      dispatch({
        type: actionTypes.SEARCH_AND_CAPTURE_ERROR,
      });
    }
  };
};

export const loadDataListPokemon = ({ offset, limit }: GetPokemonListProps) => {
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.LOAD_POKEMON_LIST_REQUEST,
    });
    try {
      const data = await getPokemonList({ offset, limit });
      dispatch({
        data: data,
        type: actionTypes.LOAD_POKEMON_LIST_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.LOAD_POKEMON_LIST_ERROR,
      });
    }
  };
};

export const clearPokemonList = () => {
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.CLEAR_POKEMON_LIST,
    });
  };
};
