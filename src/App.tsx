import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SearchPokemonPage from "./SearchPokemon/Page/SearchPokemonPage";
import PokemonPage from "./Pokemon/Page/PokemonPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#39738c",
    },
    secondary: {
      main: "#f6e652",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/search-pokemon" component={SearchPokemonPage} />
          <Route path="/pokedex/" exact component={PokemonPage} />
          <Redirect from="/" to="/search-pokemon" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
