import * as React from "react";
import { Dialog, IconButton, Tooltip } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../Redux/Actions/SeachPokemon";
import * as actionsPokedex from "../../Pokedex/Redux/Actions/Pokedex";
import { useSelector } from "../../Store";
import Pokedex from "../../Pokedex/Components/Pokedex";
import { Close, Clear } from "@material-ui/icons";
import PokedexClosed from "../../Assets/pokedex.png";
import {
  Container,
  ContainerButtonMoreData,
  GridContainer,
  StyledButton,
  StyledClearButton,
  StyledContainerFlexEnd,
  StyledImg,
  CssTextField,
  StyledHeader,
  StyledContainerOneCard,
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   return (
    <ContainerSection>
      <StyledHeader>
        <img
          src="https://fontmeme.com/permalink/210604/3f816d4880cde324621b5b183b00fc9e.png"
          alt="Pok??dex"
        />
        <h1>Which Pokemon are we going to capture today?</h1>

        <p>
          Search for a new Pok??mon or click on the Pok??dex to view your captured
          Pok??mon!
        </p>
      </StyledHeader>

      <StyledContainerFlexEnd>
        <Tooltip title="Pok??dex" placement="left" arrow>
          <StyledImg
            src={PokedexClosed}
            alt="Pok??dex"
            role="button"
            onClick={() => setPokedexIsOpen(true)}
          />
        </Tooltip>
      </StyledContainerFlexEnd>
      <Container>
        <CssTextField
          value={pokemonIdentifier}
          label="Enter the name or number of the pok??mon you want to catch!"
          placeholder="pikachu or 25"
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
          Search
        </StyledButton>
      </Container>
      {Object.keys(pokemonState).length > 0 && (
        <StyledContainerFlexEnd>
          <Tooltip title="Clean filter">
            <StyledClearButton
              variant="contained"
              onClick={() => handleClearPokemonList()}
            >
              <Clear />
            </StyledClearButton>
          </Tooltip>
        </StyledContainerFlexEnd>
      )}

      <GridContainer>
        {pokemonListState.map((pokemon: PokemonProps) => (
          <CardImage
            key={pokemon.id + Math.random()}
            title={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprite}
            handleClick={() => handlePokemonCaptureFromList(pokemon.name)}
          />
        ))}
      </GridContainer>

      {Object.keys(pokemonState).length > 0 && (
        <StyledContainerOneCard>
          <CardImage
            key={pokemonState.id + Math.random()}
            title={pokemonState.name}
            id={pokemonState.id}
            image={pokemonState.sprites?.front_default}
            handleClick={handlePokemonCaptureBySearch}
          />
        </StyledContainerOneCard>
      )}

      {Object.keys(pokemonState).length === 0 && (
        <ContainerButtonMoreData>
          <StyledButton
            color="primary"
            variant="contained"
            onClick={handleLoadMoreData}
          >
            Load more
          </StyledButton>
        </ContainerButtonMoreData>
      )}
      <Dialog
        aria-labelledby="Pok??dex"
        aria-describedby="List of captured pok??mons"
        open={pokedexIsOpen}
      >
        <StyledContainerFlexEnd>
          <IconButton onClick={() => setPokedexIsOpen(false)}>
            <Close />
          </IconButton>
        </StyledContainerFlexEnd>

        <Pokedex />
      </Dialog>
    </ContainerSection>
  );
};

export default SearchPokemon;
