import PokemonEdit from "./PokemonEdit";
import PokemonList from "./PokemonList";

export const PATH_EDIT = '/pokemon/:id/edit'
export const PATH_LIST = '/'
export const PATH_ADD = '/pokemon/new'
export const routes = [
  {
    path: PATH_LIST,
    element: <PokemonList />,
  },
  {
    path: PATH_EDIT,
    element: <PokemonEdit />,
  },
  {
    path: PATH_ADD,
    element: <PokemonEdit />,
  },
];