import pokedexReducer, { initialState } from "./Pokedex";
import * as actionTypes from "../Types/Pokedex";

const data = {
  capturedPokemons: [
    {
      id: 1,
      name: "bulbasaur",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

      height: 7,
      types: [],
      weight: 69,
      stats: [],
    },
  ],
};

describe("Pokedex reducer", () => {
  it("should return initialState", () => {
    const state = pokedexReducer(undefined, {
      capturedPokemons: undefined,
      type: "UNKNOWN_ACTION_TYPE",
    });
    expect(state).toEqual(initialState);
  });

  it.skip("should added pokemon in Pokedex", () => {
    const state = pokedexReducer(initialState, {
      capturedPokemons: data.capturedPokemons,
      type: actionTypes.ADD_POKEMON_TO_POKEDEX,
    });

    expect(state.capturedPokemons).toEqual(data.capturedPokemons);
    expect(state.capturedPokemons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          sprite: expect.any(String),
          height: expect.any(Number),
          weight: expect.any(Number),
          types: [],
          stats: [],
        }),
      ])
    );
  });
});
