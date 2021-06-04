import styled, { keyframes } from "styled-components";

interface StatsBarProps {
  width: number;
  color: string | undefined;
}

const expandRight = keyframes`
  from {
    width: 0px;
  }
  to {
  }
`;

export const StatsBar = styled("div")<StatsBarProps>`
  color: white;
  background: ${(props) => props.color};
  font-size: 12px;
  animation: ${expandRight} 1s ease;
  min-width: 10%;
  width: calc(${(props) => props.width}%);
  height: 20px;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: 8px 0px 15px;

  &:before {
    content: "";
    position: absolute;
    right: -${20 / 2}px;
    border-left: ${20 / 2}px solid ${(props) => props.color};
    border-top: ${20 / 2}px solid transparent;
    border-bottom: ${20 / 2}px solid transparent;
  }

  &:hover {
    filter: brightness(0.6);
    cursor: pointer;
  }
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`;
