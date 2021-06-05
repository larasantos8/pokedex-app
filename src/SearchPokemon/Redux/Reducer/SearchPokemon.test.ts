import searchPokemonReducer, { initialState } from "./SearchPokemon";
import * as actionTypes from "../Types/SearchPokemon";

const searchPokemondata = {
  data: {
    id: 1,
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

    height: 7,
    types: [],
    weight: 69,
    stats: [],
  },
  dataList: [
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

describe("Search Pokemon reducer", () => {
  it("should return initialState", () => {
    const state = searchPokemonReducer(undefined, {
      data: undefined,
      dataList: undefined,
      type: "UNKNOWN_ACTION_TYPE",
    });
    expect(state).toEqual(initialState);
  });

  it("should load Search Pokemon data", () => {
    const state = searchPokemonReducer(initialState, {
      data: searchPokemondata.data,
      type: actionTypes.SEARCH_POKEMON_SUCCESS,
    });

    expect(state.data).toEqual(searchPokemondata.data);
    expect(state.data).toEqual(
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

  it("should set loading to reducer data", () => {
    const state = searchPokemonReducer(initialState, {
      type: actionTypes.SEARCH_POKEMON_REQUEST,
    });

    expect(state).toEqual({ ...initialState, loading: true, hasError: false });
  });

  it("should set hasError to reducer data", () => {
    const state = searchPokemonReducer(initialState, {
      type: actionTypes.SEARCH_POKEMON_ERROR,
    });

    expect(state).toEqual({ ...initialState, hasError: true });
  });

  it.skip("should load Search Pokemon dataList", () => {
    const state = searchPokemonReducer(initialState, {
      dataList: searchPokemondata.dataList,
      type: actionTypes.LOAD_POKEMON_LIST_REQUEST,
    });

    expect(state.dataList).toEqual(searchPokemondata.dataList);
    expect(state.dataList).toEqual(
      expect.arrayContaining(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          sprite: expect.any(String),
          height: expect.any(Number),
          weight: expect.any(Number),
          types: expect.any(Array),
          stats: expect.any(Array),
        })
      )
    );
  });

  it("should set loading to reducer dataList", () => {
    const state = searchPokemonReducer(initialState, {
      type: actionTypes.LOAD_POKEMON_LIST_REQUEST,
    });

    expect(state).toEqual({ ...initialState, loading: true, hasError: false });
  });

  it("should set hasError to reducer dataList", () => {
    const state = searchPokemonReducer(initialState, {
      type: actionTypes.LOAD_POKEMON_LIST_ERROR,
    });

    expect(state).toEqual({ ...initialState, hasError: true });
  });
});
