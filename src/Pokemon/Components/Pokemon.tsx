import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "../../Store";
import * as actionsPokedex from "../../Pokedex/Redux/Actions/Pokedex";
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
} from "./Pokemon_style";
import Stats from "../../Global/Stats/Stats";

interface PokemonProps {}

const Pokemon: React.FC<PokemonProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedPokemon = useSelector(
    (state) => state.PokemonReducer.selectedPokemon
  );

  const handleDropPokemon = (id: any) => {
    dispatch(actionsPokedex.dropPokemon(id));
    history.push("/search-pokemon");
  };

  const StatsColor = {
    hp: "#c52018",
    attack: "#f6e652",
    defense: "#2295d8",
  };

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push("/search-pokemon")}
      >
        <StyledArrow src={Arrow} />
        Voltar ao início
      </Button>

      <div>
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

          {/* <p>
            stats:
            {selectedPokemon.stats.map((pokemon: any) => (
              <ul key={pokemon.stat.name}>
                <li>{pokemon.stat.name}</li>
                <li>{pokemon.base_stat}</li>
              </ul>
            ))}
          </p> */}

          <p>
            stats:
            {selectedPokemon.stats.map((pokemon: any) => (
              <Stats
                color={StatsColor["attack"]}
                value={pokemon.base_stat}
                stats={pokemon.stat.name}
              />
            ))}
          </p>

          <p>passos da evolução</p>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleDropPokemon(selectedPokemon.id)}
          >
            <StyledPokeball src={OpenPokeball} />
            Excluir pokemon
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
