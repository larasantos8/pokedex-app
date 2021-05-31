import * as React from "react";
import { TextField, Dialog, IconButton, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../Redux/Actions/SeachPokemon";
import * as actionsPokedex from "../../Pokedex/Redux/Actions/Pokedex";
import { useSelector } from "../../Store";
import Pokedex from "../../Pokedex/Components/Pokedex";
import { Close } from "@material-ui/icons";
import { StyledContainerIcon } from "./SearchPokemon_style";
//import { PokemonProps } from "../../Pokedex/Components/Pokedex";

//interface SearchPokemon{}

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.SearchPokemonReducer.data);
  const [pokedexIsOpen, setPokedexIsOpen] = React.useState(false);
  const [pokemonName, setPokemonName] = React.useState("");

  const handleSearchPokemon = () => {
    dispatch(actions.loadDataSearchedPokemon(pokemonName));
  };

  const handleCapturePokemon = () => {
    dispatch(actionsPokedex.capturePokemon(pokemonState));
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
        color="secondary"
        onChange={(event) => setPokemonName(event.target.value)} //handleSearchPokemon(event)}
      />
      <Button
        disabled={!pokemonName}
        color="primary"
        variant="contained"
        onClick={handleSearchPokemon}
      >
        Procurar
      </Button>

      {/* {Object.keys(pokemonState).length > 0 && (
        <div>
          <img src={pokemonState.sprites?.front_default} alt="Pokemon" />
          {pokemonState.abilities?.map((ability: any) => (
            <p>{ability.ability.name}</p>
          ))}

          <button>+ Capturar</button>
        </div>
      )} */}
      <button onClick={handleCapturePokemon}>+ Capturar</button>
      <button onClick={() => setPokedexIsOpen(true)}>pokedex</button>
      <Dialog
        aria-labelledby="Pokédex"
        aria-describedby="Lista de pokémons capturados"
        open={pokedexIsOpen}
        // style={{ height: "600px", width: "300px" }}
      >
        <StyledContainerIcon>
          <IconButton onClick={() => setPokedexIsOpen(false)}>
            <Close />
          </IconButton>
        </StyledContainerIcon>

        <Pokedex />
      </Dialog>
    </div>
  );
};

export default SearchPokemon;
