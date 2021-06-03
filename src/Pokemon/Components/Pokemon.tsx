import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "../../Store";
import * as actionsPokedex from "../../Pokedex/Redux/Actions/Pokedex";
import * as actionsSeachPokemon from "../../SearchPokemon/Redux/Actions/SeachPokemon";
import GlassCard from "../../Global/GlassCard/GlassCard";
import { Button } from "@material-ui/core";
import Arrow from "../../Assets/arrow.png";
import OpenPokeball from "../../Assets/open-pokeball.png";
import {
  StyledArrow,
  StyledPokeball,
  Container,
  ContainerSize,
  ContainerTypes,
  ContainerSection,
  ContainerButtons,
} from "./Pokemon_style";
import Stats from "../../Global/Stats/Stats";
import { StatsProps } from "../../Pokedex/Components/Pokedex";

const Pokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedPokemon = useSelector(
    (state) => state.PokemonReducer.selectedPokemon
  );

  const handleDropPokemon = (id: any) => {
    dispatch(actionsPokedex.dropPokemon(id));
    history.push("/search-pokemon");
  };

  const StatsColor = new Map([
    ["hp", "#c52018"],
    ["attack", "#f6e652"],
    ["defense", "#2295d8"],
    ["special-attack", "#21d430"],
    ["special-defense", "#c56d25"],
    ["speed", "#6719cc"],
  ]);

  return (
    <ContainerSection>
      <div>
        <h1 style={{ textAlign: "center" }}>{selectedPokemon.name}</h1>
      </div>
      <div>
        <Container>
          <div>
            <h2>Types</h2>

            {selectedPokemon.types.map((pokemon: any) => (
              <ContainerTypes>{pokemon.type.name}</ContainerTypes>
            ))}
          </div>
          <GlassCard sprite={selectedPokemon.sprite} />

          <div>
            <h2>Weight</h2>
            <ContainerSize> {selectedPokemon.weight}</ContainerSize>
            <h2>Height</h2>
            <ContainerSize> {selectedPokemon.height}</ContainerSize>
          </div>
        </Container>

        <div style={{ margin: "20px 0" }}>
          <h2>Stats</h2>
          {selectedPokemon.stats.map((pokemonStats: StatsProps) => (
            <Stats
              key={pokemonStats.stat.name}
              color={StatsColor.get(pokemonStats.stat.name)}
              value={pokemonStats.base_stat}
              stats={pokemonStats.stat.name}
            />
          ))}
        </div>

        <p>passos da evolução</p>

        <ContainerButtons>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              history.push("/search-pokemon");
              dispatch(actionsSeachPokemon.clearPokemonList());
            }}
          >
            <StyledArrow src={Arrow} />
            Voltar
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={() => handleDropPokemon(selectedPokemon.id)}
          >
            <StyledPokeball src={OpenPokeball} />
            Excluir pokemon
          </Button>
        </ContainerButtons>
      </div>
    </ContainerSection>
  );
};
export default Pokemon;
