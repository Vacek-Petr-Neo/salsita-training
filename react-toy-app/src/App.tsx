import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import * as RouteList from './routes'

const router = createBrowserRouter(RouteList.routes);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Pokemon Tracker</h2>
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
