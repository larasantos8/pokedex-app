import styled from "styled-components";
import { animated } from "react-spring";

export const GlassContainer = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #7a7b8261;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;

export const StyledImg = styled("img")`
  width: 250px;
`;
