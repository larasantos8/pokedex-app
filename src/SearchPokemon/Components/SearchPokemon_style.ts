import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const StyledContainerFlexEnd = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

export const StyledContainerOneCard = styled("div")`
  margin-left: 50px;
`;

export const StyledHeader = styled("div")`
  text-align: center;

  > img {
    margin-top: 20px;
  }
`;

export const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  margin-left: 15px !important;
`;

export const StyledClearButton = styled(Button)`
  background: red !important;
  color: white !important;
  margin-right: 50px !important;
`;

export const StyledImg = styled("img")`
  width: 200px;
  cursor: pointer;
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 25px;
  justify-items: center;
`;

export const ContainerButtonMoreData = styled("div")`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;

export const CssTextField = withStyles({
  root: {
    width: "50%",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#39738c",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    // "& .MuiInputBase-input": {
    //   color: "#f6e652",
    // },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
  },
})(TextField);
