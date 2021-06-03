import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import Pokemon from "../Components/Pokemon";

const PokemonPage = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams(useLocation().search);
  const pokemon = searchParams.get("pokemon");

  React.useEffect(() => {
    if (!pokemon) history.push("/search-pokemon");
  }, [pokemon, history]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pokemon />
    </div>
  );
};

export default PokemonPage;
