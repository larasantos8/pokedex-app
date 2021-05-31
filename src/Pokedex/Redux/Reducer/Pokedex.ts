import * as actionTypes from "../Types/Pokedex";
import { PokemonProps } from "../../Components/Pokedex";

interface State {
  capturedPokemons: Array<PokemonProps>;
}

export const initialState = {
  capturedPokemons: [],
};

const Pokedex = (state: State = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON_TO_POKEDEX:
      return {
        ...state,
        capturedPokemons: [...state.capturedPokemons, ...action.data],
      };
    case actionTypes.DELETE_POKEMON_FROM_POKEDEX:
      return {
        capturedPokemons: [...action.data],
      };
    default:
      return state;
  }
};

export default Pokedex;
