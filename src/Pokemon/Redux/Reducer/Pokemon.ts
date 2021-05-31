import * as actionTypes from "../Types/Pokemon";
import { PokemonProps } from "../../../Pokedex/Components/Pokedex";

interface State {
  selectedPokemon: PokemonProps | {};
}

export const initialState = {
  selectedPokemon: {},
};

const Pokemon = (state: State = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_MORE_POKEMON_DETAILS:
      return {
        ...state,
        selectedPokemon: action.data,
      };
    default:
      return state;
  }
};

export default Pokemon;
