/**
 * Since we don't have a fully working backend, use this instead.
 */

enum PokemonType {
    grass = 'Grass',
    fire = 'Fire',
    water = 'Water',
    flying = 'Flying',
    electric = 'Electric'
}

interface Pokemon {
    id: number;
    name: string;
    level: number;
    type: PokemonType;
    picture?: string;
}

export const pokemonList: Pokemon[] = [
    {
        id: 1,
        name: 'Bulbasaur',
        level: 5,
        type: PokemonType.grass,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
        id: 4,
        name: 'Charmander',
        level: 6,
        type: PokemonType.fire,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
        id: 7,
        name: 'Squirtle',
        level: 4,
        type: PokemonType.water,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    },
    {
        name: 'Pikachu',
        level: 8,
        type: PokemonType.electric,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
]