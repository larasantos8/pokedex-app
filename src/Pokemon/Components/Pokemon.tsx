import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "../../Store";
import * as actions from "../Redux/Actions/Pokemon";
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
  Evolutions,
  EvolutionsImg,
  ContainerEvolutions,
  ContainerStats,
  StyledH2,
  StyledH1,
  ContainerTitle,
} from "./Pokemon_style";
import Stats from "../../Global/Stats/Stats";
import { StatsProps } from "../../Pokedex/Components/Pokedex";
import React from "react";
import { PokemonEvolutionsProps } from "../Redux/Reducer/Pokemon";

interface PokemonEvolutionsInterface {
  name: string;
  image: string;
}

const Pokemon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedPokemon, pokemonEvolutions } = useSelector(
    (state) => state.PokemonReducer
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

  React.useEffect(() => {
    dispatch(actions.loadIdEvolutionChain(selectedPokemon.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buildPokemonEvolution = (
    arrayEvolutionsImages: string[],
    arrayEvolutionsNames: string[]
  ) => {
    const evolutionsDetail: PokemonEvolutionsInterface[] = [];

    arrayEvolutionsImages.map((image: string, index) => {
      let pokemonEvolution = {
        image: image,
        name: arrayEvolutionsNames[index],
      };

      return evolutionsDetail.push(pokemonEvolution);
    });

    return evolutionsDetail;
  };

  const getImagesPokemon = (
    totalEvolutions: number,
    urlPokemonEvolutions: string[]
  ) => {
    const evolutionsImages: string[] = [];

    for (let i = 0; i < totalEvolutions; i++) {
      evolutionsImages.push(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlPokemonEvolutions[i]}.png`
      );
    }

    return evolutionsImages;
  };

  const handleEvolutionChain = (pokemonEvolutions: PokemonEvolutionsProps) => {
    const namePokemonEvolutions: string[] = [];
    const urlPokemonEvolutions: string[] = [];
    let totalEvolutions: number = 1;

    namePokemonEvolutions.push(pokemonEvolutions.species.name);
    urlPokemonEvolutions.push(pokemonEvolutions.species.url.split("/", 7)[6]);

    if (pokemonEvolutions.evolves_to.length > 0) {
      totalEvolutions += 1;
      let firstEvolution = pokemonEvolutions.evolves_to[0];

      namePokemonEvolutions.push(firstEvolution.species.name);
      urlPokemonEvolutions.push(firstEvolution.species.url.split("/", 7)[6]);

      if (firstEvolution.evolves_to.length > 0) {
        totalEvolutions += 1;
        let secondEvolution = firstEvolution.evolves_to[0];

        namePokemonEvolutions.push(secondEvolution.species.name);
        urlPokemonEvolutions.push(secondEvolution.species.url.split("/", 7)[6]);

        if (secondEvolution.evolves_to.length > 0) {
          totalEvolutions += 1;
          let thirdEvolution = secondEvolution.evolves_to[0];

          namePokemonEvolutions.push(thirdEvolution.species.name);
          urlPokemonEvolutions.push(
            thirdEvolution.species.url.split("/", 7)[6]
          );
        }
      }
    }

    const evolutionsImages = getImagesPokemon(
      totalEvolutions,
      urlPokemonEvolutions
    );

    return buildPokemonEvolution(evolutionsImages, namePokemonEvolutions);
  };

  return (
    <ContainerSection>
      <ContainerTitle>
        <StyledH1>{selectedPokemon.name}</StyledH1>
      </ContainerTitle>
      <div>
        <Container>
          <div>
            <h2>Types</h2>

            {selectedPokemon.types?.map((pokemon: any) => (
              <ContainerTypes key={pokemon.type.name}>
                {pokemon.type.name}
              </ContainerTypes>
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

        <ContainerStats>
          <h2>Stats</h2>
          {selectedPokemon.stats?.map((pokemonStats: StatsProps) => (
            <Stats
              key={pokemonStats.stat.name}
              color={StatsColor.get(pokemonStats.stat.name)}
              value={pokemonStats.base_stat}
              stats={pokemonStats.stat.name}
            />
          ))}
        </ContainerStats>

        <StyledH2>Evolution</StyledH2>
        <ContainerEvolutions>
          {handleEvolutionChain(pokemonEvolutions).map((evolution) => (
            <div key={evolution.name}>
              <Evolutions>
                <EvolutionsImg src={evolution.image} />
              </Evolutions>
              <h2>{evolution.name}</h2>
            </div>
          ))}
        </ContainerEvolutions>

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
            Back
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={() => handleDropPokemon(selectedPokemon.id)}
          >
            <StyledPokeball src={OpenPokeball} />
            Drop pokémon
          </Button>
        </ContainerButtons>
      </div>
    </ContainerSection>
  );
};
export default Pokemon;
