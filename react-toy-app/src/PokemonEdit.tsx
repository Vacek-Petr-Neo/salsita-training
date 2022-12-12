import React, {useEffect, useState} from 'react';
import './App.css';
import * as Backend from './data';
import {Pokemon, PokemonType} from './data'
import {useParams} from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

/*
type PokemonFormData = {
  id: Pokemon['id'] | undefined,
  name: Pokemon['name'];
  level: Pokemon['level'];
  type: Pokemon['type'];
  picture: Pokemon['picture'],
}
- */
function PokemonEdit() {
  const {pokemonId} = useParams();
  const [formData, setFormData]: [formData: Pokemon, setFormData: Function] = useState({
    id: -1,
    name: '',
    picture: '',
    type: PokemonType.electric,
    level: 1,
  });
  const handleMount = () => {(async () => {
    if (typeof pokemonId !== 'number') return;
    const pokemonList : Pokemon[] = await Backend.getPokemonList();
    //pokemonList.find()
  })()};
  useEffect(handleMount,[]);

  return (
    <main>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor='pokemon-name'>Name</label>
              </td>
              <td>
                <input name='pokemon-name' />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='pokemon-level'>Level</label>
              </td>
              <td>
                <input name='pokemon-level' type='number' />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='pokemon-type'>Type</label>
              </td>
              <td>
                <select name='pokemon-type'>
                  {Object.entries(Backend.PokemonType).map(([typeKey, type]) =>
                    typeKey === formData.type ?
                      <option key={typeKey} selected>{type}</option>
                    :
                      <option key={typeKey}>{type}</option>
                  )}
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='pokemon-picture'>Image Url</label>
              </td>
              <td>
                <input name='pokemon-picture' type='url' value={formData.picture}/>
              </td>
            </tr>

            <tr>
              <td>
                <input name='pokemon-submit' value='Save' type='submit' />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <PokemonDetail pokemon={formData}/>
    </main>
  );
}

export default PokemonEdit;
