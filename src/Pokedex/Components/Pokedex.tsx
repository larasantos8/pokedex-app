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
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { ClickableTableRow } from "./Pokedex_style";

export interface PokemonProps {
  id: number;
  name: string;
  sprite: any;
  height: number;
  weight: number;
  types: any[];
  stats: any[];
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
          <TableContainer>
            <Table stickyHeader aria-label="Pokémons Table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Imagem</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pokemonsPokedex
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((pokemon) => {
                    return (
                      <ClickableTableRow
                        key={pokemon.id}
                        onClick={() => handleMoreDetailsPokemon(pokemon)}
                      >
                        <TableCell>{pokemon.name}</TableCell>
                        <TableCell>
                          <img src={pokemon.sprite} alt="Pokémon" />
                        </TableCell>
                      </ClickableTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
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
        <div>Você ainda não capturou nenhum pokemon :/ </div>
      )}
    </>
  );
};

export default Pokedex;
