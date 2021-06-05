import { API_GetPokemon, API_GetPokemonList } from "./endpoints";
import axios from "axios";

export interface GetPokemonProps {
  pokemonIdentifier: string;
}

export interface GetPokemonListProps {
  offset: number;
  limit: number;
}

export const getPokemon = async ({ pokemonIdentifier }: GetPokemonProps) => {
  try {
    const res = await axios.get(API_GetPokemon + `/${pokemonIdentifier}`);

    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getPokemonList = async ({
  offset,
  limit,
}: GetPokemonListProps) => {
  try {
    const res = await axios.get(
      API_GetPokemonList + `/?limit=${limit}&offset=${offset}`
    );

    const pokemonList = res.data.results.map((result: any, index: any) => ({
      ...result,
      name: result.name,
      id: index + 1 + offset,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1 + offset
      }.png`,
      apiURL: result.url,
    }));

    return pokemonList;
  } catch (err) {
    throw new Error(err);
  }
};
