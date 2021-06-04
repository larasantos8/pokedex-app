import {
  API_GetPokemonSpecies,
  API_GetPokemonEvolutionsChain,
} from "./endpoints";
import axios from "axios";

export interface GetPokemonSpeciesProps {
  idPokemon: number;
}

export const getIdEvolutionChain = async (
  idPokemon: GetPokemonSpeciesProps
) => {
  try {
    const res = await axios.get(API_GetPokemonSpecies + `/${idPokemon}`);
    let splitedUrlArray: string[] = res.data.evolution_chain.url.split("/", 7);

    const resEvolutionChain = await axios.get(
      API_GetPokemonEvolutionsChain + `/${splitedUrlArray[6]}`
    );

    return resEvolutionChain.data.chain;
  } catch (err) {
    throw new Error(err);
  }
};
