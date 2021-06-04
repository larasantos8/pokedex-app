import styled from "styled-components";

export const StyledArrow = styled("img")`
  transform: rotate(270deg);
  width: 35px;
  margin-right: 5px;
`;

export const StyledPokeball = styled("img")`
  width: 35px;
  margin-right: 5px;
`;

export const Container = styled("div")`
  display: flex;
  justify-content: space-evenly;
`;

export const ContainerSection = styled("div")`
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 20px;
  background: #2d2d330f;
`;

export const ContainerSize = styled("div")`
  color: white;
  background: #de9400;
  border-radius: 8px;
  width: 150px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const ContainerTypes = styled("div")`
  color: white;
  background: cadetblue;
  border-radius: 8px;
  width: 150px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const ContainerButtons = styled("div")`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  > button {
    width: 200px;
  }
`;

export const ContainerEvolutions = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;

  > div > h2 {
    font-size: 20px;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const ContainerStats = styled("div")`
  margin: 20px 0px 30px 50px;
`;

export const StyledH2 = styled("h2")`
  margin-left: 50px;
`;

export const StyledH1 = styled("h1")`
  text-align: center;
  text-transform: capitalize;
`;

export const Evolutions = styled("div")`
  background: #36363e;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 4px #000, 5px 5px 20px #0395da;
`;

export const EvolutionsImg = styled("img")`
  width: 120px;
  margin-top: 15px;
  margin-left: 15px;
`;
