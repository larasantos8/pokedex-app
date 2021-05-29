import { API_GetPokemon } from "./endpoints";
import axios from "axios";

export const getPokemon = async ({ idPokemon }) => {
  try {
    const res = await axios.get(API_GetPokemon + `/${idPokemon}`);

    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
