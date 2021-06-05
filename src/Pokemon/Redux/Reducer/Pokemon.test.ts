import pokemonReducer, { initialState } from "./Pokemon";
import * as actionTypes from "../Types/Pokemon";

const data = {
  selectedPokemon: {
    id: 1,
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    height: 7,
    types: [
      {
        type: {
          name: "grass",
        },
      },
      {
        type: {
          name: "poison",
        },
      },
    ],
    weight: 69,
    stats: [
      {
        base_stat: 45,

        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 49,

        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 49,

        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 65,

        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 45,

        stat: {
          name: "speed",
        },
      },
    ],
  },
  pokemonEvolutions: {
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    evolves_to: [],
  },
};

describe("Pokemon reducer", () => {
  it("should return initialState", () => {
    const state = pokemonReducer(undefined, {
      selectedPokemon: undefined,
      pokemonEvolutions: undefined,
      type: "UNKNOWN_ACTION_TYPE",
    });
    expect(state).toEqual(initialState);
  });

  it.skip("should load more details Pokemon selected ", () => {
    const state = pokemonReducer(initialState, {
      selectedPokemon: data.selectedPokemon,
      type: actionTypes.LOAD_MORE_POKEMON_DETAILS,
    });

    expect(state.selectedPokemon).toEqual(data.selectedPokemon);
    expect(state.selectedPokemon).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        sprite: expect.any(String),
        height: expect.any(Number),
        weight: expect.any(Number),
        types: expect.any(Array),
        stats: expect.any(Array),
      })
    );
  });

  it.skip("should load more details Pokemon evolutions", () => {
    const state = pokemonReducer(initialState, {
      pokemonEvolutions: data.pokemonEvolutions,
      type: actionTypes.GET_EVOLUTION_CHAIN_SUCCESS,
    });

    expect(state.pokemonEvolutions).toEqual(data.pokemonEvolutions);
    expect(state.pokemonEvolutions).toEqual(
      expect.objectContaining({
        species: expect.objectContaining({
          name: expect.any(String),
          url: expect.any(String),
        }),
        evolves_to: expect.any(Array),
      })
    );
  });
});
