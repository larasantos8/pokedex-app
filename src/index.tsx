import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
