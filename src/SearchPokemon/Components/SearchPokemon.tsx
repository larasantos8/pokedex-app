import * as React from "react";
import { Button, Dialog, IconButton, Tooltip } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch } from "react-redux";
import * as actions from "../Redux/Actions/SeachPokemon";
import * as actionsPokedex from "../../Pokedex/Redux/Actions/Pokedex";
import { useSelector } from "../../Store";
import Pokedex from "../../Pokedex/Components/Pokedex";
import { Close } from "@material-ui/icons";
import PokedexClosed from "../../Assets/pokedex.png";
import {
  Container,
  ContainerButtonMoreData,
  GridContainer,
  StyledButton,
  StyledContainerIcon,
  StyledImg,
  StyledTextField,
} from "./SearchPokemon_style";
import { ContainerSection } from "../../Pokemon/Components/Pokemon_style";
import CardImage from "../../Global/Card/Card";
import { PokemonProps } from "../../Pokedex/Components/Pokedex";

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.SearchPokemonReducer.data);
  const pokemonListState = useSelector(
    (state) => state.SearchPokemonReducer.dataList
  );
  const [pokedexIsOpen, setPokedexIsOpen] = React.useState(false);
  const [pokemonIdentifier, setPokemonIdentifier] = React.useState("");
  const [offset, setOffset] = React.useState(0);
  const limit = 8;

  const handleSearchPokemon = () => {
    dispatch(actions.clearPokemonList());
    dispatch(actions.getPokemonByID({ pokemonIdentifier }));
  };

  const handlePokemonCaptureFromList = (pokemonIdentifier: string) => {
    dispatch(actions.searchAndCapturePokemon({ pokemonIdentifier }));
  };

  const handleLoadMoreData = () => {
    setOffset(offset + limit);
    dispatch(actions.loadDataListPokemon({ offset, limit }));
  };

  const handlePokemonCaptureBySearch = () => {
    dispatch(actionsPokedex.capturePokemon(pokemonState));
  };

  const handleClearPokemonList = () => {
    let offset = 0;
    setPokemonIdentifier("");
    dispatch(actions.clearPokemonList());
    dispatch(actions.loadDataListPokemon({ offset, limit }));
  };

  React.useEffect(() => {
    dispatch(actions.loadDataListPokemon({ offset, limit }));
    setOffset(limit);
  }, []);

  return (
    <ContainerSection>
      <h1 style={{ textAlign: "center" }}>Qual pokemon vamos capturar hoje?</h1>
      <div>
        <p style={{ textAlign: "center" }}>
          Pense em um textinho legal para inserir aqui!
        </p>
      </div>
      <div style={{ direction: "rtl" }}>
        <Tooltip title="Pokedex" placement="left" arrow>
          <StyledImg
            src={PokedexClosed}
            alt="Pokedex"
            role="button"
            onClick={() => setPokedexIsOpen(true)}
          />
        </Tooltip>
      </div>
      <Container style={{ marginTop: "50px" }}>
        <StyledTextField
          value={pokemonIdentifier}
          label="Digite o nome ou número do pokemon que deseja capturar!"
          placeholder="pikachu ou 25"
          fullWidth
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(event) => setPokemonIdentifier(event.target.value)}
        />
        <StyledButton
          disabled={!pokemonIdentifier}
          color="primary"
          variant="contained"
          onClick={handleSearchPokemon}
        >
          Procurar
        </StyledButton>
      </Container>
      {Object.keys(pokemonState).length > 0 && (
        <StyledContainerIcon>
          <Tooltip title="Limpar filtro">
            <Button
              variant="contained"
              style={{ background: "red", color: "white", marginRight: "50px" }}
              onClick={() => {
                handleClearPokemonList();
              }}
            >
              <ClearIcon />
            </Button>
          </Tooltip>
        </StyledContainerIcon>
      )}

      <GridContainer>
        {pokemonListState.map((pokemon: PokemonProps) => (
          <CardImage
            key={pokemon.id}
            title={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprite}
            handleClick={() => handlePokemonCaptureFromList(pokemon.name)}
          />
        ))}
      </GridContainer>

      {Object.keys(pokemonState).length > 0 && (
        <CardImage
          key={pokemonState.id}
          title={pokemonState.name}
          id={pokemonState.id}
          image={pokemonState.sprites?.front_default}
          handleClick={handlePokemonCaptureBySearch}
        />
      )}

      <ContainerButtonMoreData>
        <StyledButton
          color="primary"
          variant="contained"
          onClick={handleLoadMoreData}
        >
          Carregar mais
        </StyledButton>
      </ContainerButtonMoreData>

      <Dialog
        aria-labelledby="Pokédex"
        aria-describedby="Lista de pokémons capturados"
        open={pokedexIsOpen}
      >
        <StyledContainerIcon>
          <IconButton onClick={() => setPokedexIsOpen(false)}>
            <Close />
          </IconButton>
        </StyledContainerIcon>

        <Pokedex />
      </Dialog>
    </ContainerSection>
  );
};

export default SearchPokemon;
