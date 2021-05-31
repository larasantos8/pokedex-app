import * as actionTypes from "../Types/Pokedex";

export const capturePokemon = (data: any) => {
  const pokemonsPokedex = [
    {
      id: data.id,
      name: data.name,
      sprite: data.sprites?.front_default,
      height: data.height,
      weight: data.weight,
      types: data.types,
      stats: data.stats,
    },
  ];
  return (dispatch: any) => {
    dispatch({
      data: pokemonsPokedex,
      type: actionTypes.ADD_POKEMON_TO_POKEDEX,
    });
  };
};

export const dropPokemon = (id: any) => {
  return (dispatch: any, getState: any) => {
    const { capturedPokemons } = getState().PokedexReducer;

    const pokemonsPokedex = capturedPokemons.filter((pokemon: any) => {
      return pokemon.id !== id;
    });

    dispatch({
      data: pokemonsPokedex,
      type: actionTypes.DELETE_POKEMON_FROM_POKEDEX,
    });
  };
};
