import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../Redux/Actions/SeachPokemon";
import { useSelector } from "../../Store";

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.SearchPokemonReducer.data);

  const handleSearchPokemon = (event: any) => {
    dispatch(actions.loadDataSearchedPokemon(event.target.value));
  };

  return (
    <div>
      <h1>Qual pokemon vamos capturar hoje?</h1>
      <p>Pense em um textinho legal para inserir aqui!</p>
      <TextField
        label="Digite o nome ou número do pokemon que deseja capturar!"
        placeholder="Pikachu"
        fullWidth
        margin="normal"
        variant="outlined"
        onChange={(event) => handleSearchPokemon(event)}
      />

      {/* {Object.keys(pokemonState).length > 0 && (
        <div>
          <img src={pokemonState.sprites?.front_default} alt="Pokemon" />
          {pokemonState.abilities?.map((ability: any) => (
            <p>{ability.ability.name}</p>
          ))}

          <button>+ Capturar</button>
        </div>
      )} */}
    </div>
  );
};

export default SearchPokemon;
