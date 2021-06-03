import * as React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "../../Store";
import * as actionsPokemon from "../../Pokemon/Redux/Actions/Pokemon";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import {
  StyledTableContainer,
  ClickableTableRow,
  ContainerNoPokemon,
  StyledSubtitle,
  StyledTitle,
} from "./Pokedex_style";
import AshSad from "../../Assets/ash-sad.png";

interface TypesProps {
  type: {
    name: string;
  };
}
export interface StatsProps {
  base_stat: number;
  stat: {
    name: string;
  };
}
export interface PokemonProps {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  types: TypesProps[];
  stats: StatsProps[];
}

const Pokedex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemonsPokedex = useSelector(
    (state) => state.PokedexReducer.capturedPokemons
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleMoreDetailsPokemon = (selectedPokemon: any) => {
    dispatch(actionsPokemon.moreDetailsCapturedPokemon(selectedPokemon));
    history.push(`pokedex/?pokemon=${selectedPokemon.name}`);
  };

  return (
    <>
      {pokemonsPokedex.length > 0 ? (
        <Paper>
          <StyledTableContainer>
            <Table stickyHeader aria-label="Pokémons Table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pokemonsPokedex
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((pokemon) => {
                    return (
                      <ClickableTableRow
                        key={pokemon.id + Math.random()}
                        onClick={() => handleMoreDetailsPokemon(pokemon)}
                      >
                        <TableCell align="center">{pokemon.name}</TableCell>
                        <TableCell align="center">
                          <img src={pokemon.sprite} alt="Pokémon" />
                        </TableCell>
                      </ClickableTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </StyledTableContainer>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={pokemonsPokedex.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <ContainerNoPokemon>
          <StyledTitle>You haven't caught any Pokemon yet!!</StyledTitle>
          <StyledSubtitle>
            Go back to the previous screen and capture the Pokémon so that they
            appear in your Pokédex.
          </StyledSubtitle>
          <img src={AshSad} alt="Ash sad" />
        </ContainerNoPokemon>
      )}
    </>
  );
};

export default Pokedex;
