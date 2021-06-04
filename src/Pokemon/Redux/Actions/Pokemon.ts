import { getIdEvolutionChain, GetPokemonSpeciesProps } from "../API/Pokemon";
import * as actionTypes from "../Types/Pokemon";

export const moreDetailsCapturedPokemon = (selectedPokemon: any) => {
  return (dispatch: any) => {
    dispatch({
      data: selectedPokemon,
      type: actionTypes.LOAD_MORE_POKEMON_DETAILS,
    });
  };
};

export const loadIdEvolutionChain = (idPokemon: GetPokemonSpeciesProps) => {
  return async (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_EVOLUTION_CHAIN_REQUEST,
    });
    try {
      const data = await getIdEvolutionChain(idPokemon);

      dispatch({
        data: data,
        type: actionTypes.GET_EVOLUTION_CHAIN_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: actionTypes.GET_EVOLUTION_CHAIN_ERROR,
      });
    }
  };
};
