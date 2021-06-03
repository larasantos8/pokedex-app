import styled from "styled-components";
import { TableContainer, TableRow } from "@material-ui/core";

export const StyledTableContainer = styled(TableContainer)`
  text-transform: capitalize;
  height: calc(100% - 50px) !important;
  width: 300px !important;
`;

export const ClickableTableRow = styled(TableRow)`
  cursor: pointer;
  :hover {
    background-color: #f6f6f6;
  }
`;

export const ContainerNoPokemon = styled("div")`
  text-align: center;

  > img {
    width: 200px;
    height: 250px;
    margin-bottom: 30px;
  }
`;

export const StyledTitle = styled("h1")`
  font-size: 20px;
`;

export const StyledSubtitle = styled("p")`
  font-size: 16px;
  margin: 0 20px 10px;
`;
