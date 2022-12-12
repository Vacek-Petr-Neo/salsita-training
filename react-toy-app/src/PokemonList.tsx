import React, {MouseEventHandler, useEffect, useMemo, useState} from 'react';
import './App.css';
import * as Backend from './data';
import {Pokemon, PokemonType} from './data';
import PokemonDetail from "./PokemonDetail";
import {createBrowserRouter} from "react-router-dom";
import * as RouteList from './routes'
import PokemonEdit from "./PokemonEdit";

enum SortOrder {
  ASCENDING = 'ASC',
  DESCENDING = 'DESC',
}
type PokemonProps = keyof Pokemon;

//const router = createBrowserRouter(RouteList.routes);

function PokemonList() {
  const [pokemonList, setPokemonList]: [pokemonList: Pokemon[], setPokemonList: Function] = useState([]);
  const handleMount = () => {(async () => setPokemonList(await Backend.getPokemonList()))()};
  useEffect(handleMount,[]);

  const calculateMapSortingToList = () : Map<PokemonProps, Map<SortOrder, Pokemon[]>> => {
    const dummy: Pokemon = {
      id: 1,
      name: '',
      picture: '',
      type: PokemonType.electric,
      level: 1,
    };
    const getSortingFunctionByPropName = (propName: PokemonProps) : ((a: Pokemon, b: Pokemon) => number) => {
      switch (typeof dummy[propName]) {
        case 'string' :
          return (a: Pokemon, b: Pokemon) => String(a[propName]).localeCompare(String(b[propName]))
        case 'number' :
        default :
          return (a: Pokemon, b: Pokemon) => Number(a[propName]) - Number(b[propName])
      }
    };

    const result = new Map<PokemonProps, Map<SortOrder, Pokemon[]>>();
    for (let propName of Object.keys(dummy) as PokemonProps[]) {
      const sortedPokemon = pokemonList.slice().sort(getSortingFunctionByPropName(propName));
      const subMap = new Map<SortOrder, Pokemon[]>();
      subMap.set(SortOrder.ASCENDING, sortedPokemon);
      subMap.set(SortOrder.DESCENDING, sortedPokemon.slice().reverse())
      result.set(propName, subMap);
    }
    return result;
  };
  const mapSortingToPokemonList = useMemo(calculateMapSortingToList, [pokemonList]);

  const [currentSortOrder, setCurrentSortOrder]: [currentSortOrder: [PokemonProps, SortOrder], setCurrentSortOrder: Function]
    = useState(['id', SortOrder.ASCENDING]);
  const handleSort = (propName: PokemonProps) : MouseEventHandler<any> => (
    () : void => {
      setCurrentSortOrder([
        propName,
        currentSortOrder[0] === propName && currentSortOrder[1] === SortOrder.ASCENDING ? SortOrder.DESCENDING : SortOrder.ASCENDING,
      ])
    }
  )

  const handleDelete = (pokemonId: Pokemon['id']) : MouseEventHandler<any> => (async () => {
    /* Hide the button for 1 second to prevent repeated calls */
    const deleteButton = document.getElementById('deleteButton-' + pokemonId)
    if (deleteButton) {
      deleteButton.dataset.hidden = 'true';
      setTimeout(() => {deleteButton.dataset.hidden = 'false'}, 1000);
    }

    await Backend.deletePokemon(pokemonId);
    setPokemonList(await Backend.getPokemonList());

    if (pokemonId === pokemonShown?.id) {
      setPokemonShown(undefined);
    }
  });

  const [pokemonShown, setPokemonShown]: [pokemonShown: Pokemon | undefined, setPokemonShown: Function] = useState();
  const handleShowDetail = (pokemon: Pokemon | undefined) : MouseEventHandler<any> => (() : void => {setPokemonShown(pokemon)});

  return (
      <main>
        <button
          value="add"
          data-z={'a'/* TODO onClick={handleRenderEdit(null)} */}
        >Add Pokemon</button>
        <table>
          <thead>
          <tr>
            <th />
            <th className="sortable" onClick={handleSort('name')}>Name</th>
            <th className="sortable" onClick={handleSort('level')}>Level</th>
            <th className="sortable" onClick={handleSort('type')}>Type</th>
          </tr>
          </thead>
          <tbody>
          {
            mapSortingToPokemonList.get(currentSortOrder[0])
              ?.get(currentSortOrder[1])
              ?.map((pokemon: Pokemon) =>
                <tr key={pokemon.id}>
                  <td>
                    <span id={'deleteButton-' + pokemon.id}
                          className='button deleteButton'
                          onClick={handleDelete(pokemon.id)}
                          data-hidden='false'
                    >Delete</span>
                    {/* TODO <Link to={} ></Link> */}
                    {/* <span onClick={handleRenderEdit(index)}></span> */}
                  </td>
                  <td className='button'
                      onClick={handleShowDetail(pokemon)}
                  >{pokemon.name}</td>

                  <td>{pokemon.level}</td>
                  <td>{pokemon.type}</td>
                </tr>
              )
          }
          </tbody>
        </table>

        {(typeof pokemonShown === "object") ?
          <PokemonDetail pokemon={pokemonShown}/>
          : "" }
      </main>
  );
}

export default PokemonList;
