import React from 'react';
import './App.css';
import {Pokemon} from './data'

function PokemonDetail(props:{pokemon:Pokemon}) {
  return (
    <table>
      <tbody>
        <tr>
          <td colSpan={2}>
            <img alt={props.pokemon.name}
                 src={props.pokemon.picture !== '' ? props.pokemon.picture : 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'}
            />
          </td>
        </tr>
        <tr>
          <th>Name: </th>
          <td>{props.pokemon.name}</td>
        </tr>
        <tr>
          <th>Level: </th>
          <td>{props.pokemon.level}</td>
        </tr>
        <tr>
          <th>Type: </th>
          <td>{props.pokemon.type}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PokemonDetail;
