/**
 * Since we don't have a fully working backend, use this instead.
 */

export enum PokemonType {
    grass = 'Grass',
    fire = 'Fire',
    water = 'Water',
    flying = 'Flying',
    electric = 'Electric',
}

export interface Pokemon {
    id: number;
    name: string;
    level: number;
    type: PokemonType;
    picture?: string;
}

export type UnpersistedPokemon = Omit<Pokemon, 'id'>;

// Note: this should remain private and should not be modified directly.  If you
// need to manipulate this, use the exported functions in this file.
let pokemonList: Pokemon[] = [
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
        id: 8,
        name: 'Pikachu',
        level: 8,
        type: PokemonType.electric,
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
]

export const getPokemonList = async () => {
    return pokemonList
}

export const updatePokemon = async (pokemonId: Pokemon['id'], newInfo: Pokemon): Promise<Pokemon> => {
    if (pokemonList.find(pokemon => pokemon.id === pokemonId) === undefined) {
        throw new Error('Pokemon not found');
    }

    pokemonList = pokemonList.map(pokemon => {
        if (pokemon.id !== pokemonId) return pokemon
        return newInfo
    })

    return newInfo;
}

export const deletePokemon = async (pokemonId: Pokemon['id']): Promise<void> => {
    if (pokemonList.find(pokemon => pokemon.id === pokemonId) === undefined) {
        throw new Error('Pokemon not found');
    }

    pokemonList = pokemonList.filter(pokemon => pokemon.id !== pokemonId)
}

export const createPokemon = async (newInfo: UnpersistedPokemon): Promise<Pokemon> => {
    const newId = pokemonList[pokemonList.length - 1].id + 1
    const newPokemon = { id: newId, ...newInfo }
    pokemonList = [
        ...pokemonList,
        newPokemon
    ]

    return newPokemon;
}