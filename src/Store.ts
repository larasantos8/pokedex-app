import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import SearchPokemonReducer from "./SearchPokemon/Redux/Reducer/SearchPokemon";
import PokedexReducer from "./Pokedex/Redux/Reducer/Pokedex";
import PokemonReducer from "./Pokemon/Redux/Reducer/Pokemon";

const rootReducer = combineReducers({
  SearchPokemonReducer,
  PokedexReducer,
  PokemonReducer,
});

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type rootStore = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<rootStore> = useReduxSelector;

export default Store;
