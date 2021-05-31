import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          {/* <Route path="/" component={HomePage} /> */}
          <Route path="/search-pokemon" component={SearchPokemonPage} />
          <Route path="/pokedex/" exact component={PokemonPage} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
