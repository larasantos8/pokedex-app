import styled from "styled-components";
import { animated } from "react-spring";

export const GlassContainer = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  //backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;

export const StyledImg = styled("img")`
  width: 250px;
`;

export const StyledH1 = styled("h1")`
  text-transform: capitalize;
  text-align: -webkit-center;
`;
