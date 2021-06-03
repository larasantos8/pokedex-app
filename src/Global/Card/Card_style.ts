import styled from "styled-components";
import { Card, CardContent, Button } from "@material-ui/core";

export const StyledCard = styled(Card)`
  & {
    max-width: 200px;
    background-color: #717178 !important;
    margin-bottom: 20px;

    > img:nth-child(1) {
      height: 230px;
    }
  }
`;

export const StyledCardContent = styled(CardContent)`
  & {
    padding: 0 10px !important;
    text-align: center;

    > h1 {
      text-transform: capitalize;
      font-size: 20px;
      margin: 0px;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
`;
