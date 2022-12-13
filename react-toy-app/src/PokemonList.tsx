import React, {MouseEventHandler, useEffect, useMemo, useState} from 'react';
import './App.css';
import * as Backend from './data';
import {Pokemon, PokemonType} from './data';
import PokemonDetail from "./PokemonDetail";
import {generatePath, Link, NavigateFunction, useNavigate} from "react-router-dom";
import * as RouteList from './routes'

enum SortOrder {
  ASCENDING = 'ASC',
  DESCENDING = 'DESC',
}
type PokemonProps = keyof Pokemon;

function PokemonList() {
  const navigate : NavigateFunction = useNavigate();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const handleMount = () => {(async () => setPokemonList(await Backend.getPokemonList()))()};
  useEffect(handleMount,[]);

  const getSortedPokemon = (newSortKey: PokemonProps, newSortOrder: SortOrder) : Pokemon[] => {
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

    const result = pokemonList.slice().sort(getSortingFunctionByPropName(newSortKey));
    if (newSortOrder === SortOrder.DESCENDING) {
      result.reverse();
    }
    return result;
  };
  const [sortKey, setSortKey] = useState<PokemonProps>('id');
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASCENDING);
  const sortedPokemonList = useMemo<Pokemon[]>(
    () => (getSortedPokemon(sortKey, sortOrder)),
    [pokemonList, sortKey, sortOrder]
  );

  const handleSort = (propName: PokemonProps) : MouseEventHandler<any> => (
    () : void => {
      if (propName === sortKey) {
        setSortOrder(sortOrder === SortOrder.ASCENDING ? SortOrder.DESCENDING : SortOrder.ASCENDING)
        return;
      }

      setSortKey(propName);
      setSortOrder(SortOrder.ASCENDING);
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

  const [pokemonShown, setPokemonShown]= useState<Pokemon | undefined>();
  const handleShowDetail = (pokemon: Pokemon | undefined) : MouseEventHandler<any> => (() : void => {setPokemonShown(pokemon)});

  return (
      <main>
        <button
          value="add"
          onClick={() => navigate(RouteList.PATH_ADD)}
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
            sortedPokemonList.map((pokemon: Pokemon) =>
                <tr key={pokemon.id}>
                  <td>
                    <a id={'deleteButton-' + pokemon.id}
                          href="javascript:;"
                          className='button deleteButton'
                          onClick={handleDelete(pokemon.id)}
                          data-hidden='false'
                    >Delete</a>
                    &nbsp;
                    <Link to={generatePath(RouteList.PATH_EDIT, {id: '' + pokemon.id})} >Edit</Link>
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
