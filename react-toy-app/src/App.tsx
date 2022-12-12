import React from 'react';
import './App.css';
import {createBrowserRouter} from "react-router-dom";
import * as RouteList from './routes'
import PokemonEdit from "./PokemonEdit";
import PokemonList from "./PokemonList";

//const router = createBrowserRouter(RouteList.routes);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pokemon Tracker</h2>
        <PokemonEdit />
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
