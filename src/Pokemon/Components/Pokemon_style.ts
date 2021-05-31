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
  > div {
    display: flex;
    justify-content: center;
  }
`;

export const ContainerSize = styled("div")`
  color: white;
  background: #de9400;
  border-radius: 8px;
  /* text-transform: capitalize; */
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
  /* text-transform: capitalize; */
  width: 150px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 15px;
`;
