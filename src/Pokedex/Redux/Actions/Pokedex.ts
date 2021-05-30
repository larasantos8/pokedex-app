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
