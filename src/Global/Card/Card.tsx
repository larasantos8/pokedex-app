import { CardActions } from "@material-ui/core";
import React from "react";
import Pokeball from "../../Assets/pokeball.png";
import { StyledButton, StyledCard, StyledCardContent } from "./Card_style";

interface CardImageProps {
  image: string;
  title: string;
  id: number;
  handleClick: () => void;
}

const CardImage: React.FC<CardImageProps> = ({
  image,
  title,
  id,
  handleClick,
}) => {
  return (
    <StyledCard>
      <img src={image} alt={title} />
      <StyledCardContent>
        <h1>
          {title} Nº: {id}
        </h1>
      </StyledCardContent>
      <CardActions>
        <StyledButton color="primary" variant="contained" onClick={handleClick}>
          <img src={Pokeball} alt="Pokeball" />
          Capture
        </StyledButton>
      </CardActions>
    </StyledCard>
  );
};

export default CardImage;
