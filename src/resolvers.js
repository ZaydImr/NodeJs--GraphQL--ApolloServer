//const fetch = require('node-fetch')
import fetch from 'node-fetch'

export const resolvers = {

    Query: {
        characters: () => fetchCharacters(),
        character: (root, {id})=> fetchCharacterById(id),
        episodes: () => fetchEpisodes()
    }

}

// Get Characters from api
const fetchCharacters =  () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(res=>res.json())
      .then(json=> json.results)
}

// Get Character by ID from api
const fetchCharacterById = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=>res.json())
}

// Get Episodes from api
const fetchEpisodes =  () => {
    return fetch('https://rickandmortyapi.com/api/episode')
      .then(res=>res.json())
      .then(json=> json.results)
}