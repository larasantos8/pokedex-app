import { Card, CardActions, CardContent } from "@material-ui/core";
import Pokeball from "../../Assets/pokeball.png";
import { StyledButton } from "./Card_style";

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
    <Card
      style={{
        maxWidth: "200px",
        backgroundColor: "#717178",
        marginBottom: "20px",
      }}
    >
      <img src={image} alt={title} style={{ height: "230px" }} />
      <CardContent
        style={{
          padding: "0 10px",
        }}
      >
        <h1
          style={{
            textTransform: "capitalize",
            fontSize: "22px",
            margin: "0px",
          }}
        >
          {title} Nº: {id}
        </h1>
      </CardContent>
      <CardActions>
        <StyledButton color="primary" variant="contained" onClick={handleClick}>
          <img src={Pokeball} alt="Pokeball" />
          Capturar
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default CardImage;
