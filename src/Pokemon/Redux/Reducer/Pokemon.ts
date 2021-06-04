import * as actionTypes from "../Types/Pokemon";
import { PokemonProps } from "../../../Pokedex/Components/Pokedex";

export interface PokemonEvolutionsProps {
  species: { name: string; url: string };
  evolves_to: {
    species: { name: string; url: string };
    evolves_to: {
      species: { name: string; url: string };
      evolves_to: {
        species: { name: string; url: string };
        evolves_to: {}[];
      }[];
    }[];
  }[];
}

interface State {
  selectedPokemon: PokemonProps | {};
  pokemonEvolutions: PokemonEvolutionsProps;
}

export const initialState = {
  selectedPokemon: {},
  pokemonEvolutions: {
    species: { name: "", url: "" },
    evolves_to: [],
  },
};

const Pokemon = (state: State = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOAD_MORE_POKEMON_DETAILS:
      return {
        ...state,
        selectedPokemon: action.data,
      };
    case actionTypes.GET_EVOLUTION_CHAIN_SUCCESS:
      return {
        ...state,
        pokemonEvolutions: action.data,
      };

    default:
      return state;
  }
};

export default Pokemon;
