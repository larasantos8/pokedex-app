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
`;
