import { render } from "../../Global/Test/utils";
import SearchPokemon from "./SearchPokemon";
import axios from "axios";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import { State } from "../Redux/Reducer/SearchPokemon";

export const initialState: State = {
  loading: false,
  hasError: false,
  data: {
    id: 0,
    name: "",
    sprite: "",
    height: 0,
    weight: 0,
    types: [],
    stats: [],
  },
  dataList: [
    {
      id: 0,
      name: "",
      sprite: "",
      height: 0,
      weight: 0,
      types: [],
      stats: [],
    },
  ],
};

const mockGetPokemon = {
  data: {
    id: 1,
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    height: 7,
    types: [
      {
        type: {
          name: "grass",
        },
      },
      {
        type: {
          name: "poison",
        },
      },
    ],
    weight: 69,
    stats: [
      {
        base_stat: 45,

        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 49,

        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 49,

        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 65,

        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 45,

        stat: {
          name: "speed",
        },
      },
    ],
  },
};

const mockGetPokemonList = {
  dataList: [
    {
      id: 1,
      name: "bulbasaur",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      height: 7,
      types: [
        {
          type: {
            name: "grass",
          },
        },
        {
          type: {
            name: "poison",
          },
        },
      ],
      weight: 69,
      stats: [
        {
          base_stat: 45,

          stat: {
            name: "hp",
          },
        },
        {
          base_stat: 49,

          stat: {
            name: "attack",
          },
        },
        {
          base_stat: 49,

          stat: {
            name: "defense",
          },
        },
        {
          base_stat: 65,

          stat: {
            name: "special-attack",
          },
        },
        {
          base_stat: 65,
          effort: 0,
          stat: {
            name: "special-defense",
          },
        },
        {
          base_stat: 45,

          stat: {
            name: "speed",
          },
        },
      ],
    },
  ],
};

const apiMock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

jest.mock("../Redux/Actions/SeachPokemon", () => {
  return {
    getPokemonByID: () => jest.fn(),
    searchAndCapturePokemon: () => jest.fn(),
    loadDataListPokemon: () => jest.fn(),
    clearPokemonList: () => jest.fn(),
  };
});

describe("<SeachPokemon />", () => {
  let store = mockStore(initialState);

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it.skip("", async () => {
    apiMock
      .onGet("https://pokeapi.co/api/v2/pokemon/")
      .reply(200, mockGetPokemon);
    apiMock
      .onGet("https://pokeapi.co/api/v2/pokemon-form/")
      .reply(200, mockGetPokemonList);

    const { getByRole } = render(<SearchPokemon />, { initialState, store });

    expect(
      getByRole("button", {
        name: /pokédex/i,
      })
    ).toBeInTheDocument();
  });
});
