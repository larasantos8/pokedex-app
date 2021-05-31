import * as actionTypes from "../Types/Pokemon";

export const moreDetailsCapturedPokemon = (selectedPokemon: any) => {
  return (dispatch: any) => {
    dispatch({
      data: selectedPokemon,
      type: actionTypes.LOAD_MORE_POKEMON_DETAILS,
    });
  };
};
