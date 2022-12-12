import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import './App.css';
import * as Backend from './data';
import {Pokemon, PokemonType} from './data'
import {useNavigate, useParams} from "react-router-dom";
import PokemonDetail from "./PokemonDetail";
import * as RouteList from './routes'

function PokemonEdit() {
  const navigate = useNavigate();
  const paramsRaw = useParams();

  const [formData, setFormData] = useState<Pokemon>({
    id: -1,
    name: '',
    picture: '',
    type: PokemonType.electric,
    level: 1,
  });

  const handleMount = () => {(async () => {
    if (paramsRaw.id === undefined) return;
    const pokemonId: Pokemon['id'] | undefined = parseInt(paramsRaw.id);
    if (Number.isNaN(pokemonId) || pokemonId < 1) return;

    const pokemonList : Pokemon[] = await Backend.getPokemonList();
    const pokemon = pokemonList.find(pokemon => pokemon.id === pokemonId)
    if (pokemon === undefined) {
      navigate(RouteList.PATH_LIST);
      return;
    }
    setFormData(pokemon);
  })()};
  useEffect(handleMount,[]);

  const handleChange = (pokemonPropName: keyof Pokemon) : ChangeEventHandler<HTMLInputElement | HTMLSelectElement> => {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newFormData = {...formData};
      let newValue;
      switch (pokemonPropName) {
        case "name":
        case "picture":
          newFormData[pokemonPropName] = event.target.value;
          break;
        case "level":
          newValue = parseInt(event.target.value);
          if (Number.isNaN(newValue) || newValue < 1) return;
          newFormData[pokemonPropName] = newValue;
          break;
        case "type":
          newValue = Object.values(PokemonType).find(value => value === event.target.value);
          if (newValue === undefined) return;
          newFormData[pokemonPropName] = newValue;
          break;
        default:
          return;
      }
      setFormData(newFormData);
    }
  };

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
                <input name='pokemon-name'
                       value={formData.name}
                       onChange={handleChange('name')}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='pokemon-level'>Level</label>
              </td>
              <td>
                <input name='pokemon-level'
                       type='number'
                       value={formData.level}
                       onChange={handleChange('level')}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor='pokemon-type'>Type</label>
              </td>
              <td>
                <select name='pokemon-type'
                        value={formData.type}
                        onChange={handleChange('type')}
                >
                  {Object.entries(Backend.PokemonType).map(([typeKey, type]) =>
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
                <input name='pokemon-picture'
                       type='url'
                       value={formData.picture}
                       onChange={handleChange('picture')}
                />
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
