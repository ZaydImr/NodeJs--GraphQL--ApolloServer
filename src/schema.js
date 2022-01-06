//const { gql } = require("apollo-server")
import { gql } from "apollo-server"

export const typeDefs = gql `

    type Query {
        characters: [Character]
        character(id:Int): Character
        episodes: [Episode]
    }

    type Character {
        id: ID
        name: String
        status: String
        gender: String
        origin: Origin
        image: String
        url: String
        episode: [String]
    }

    type Origin {
        name: String
        url: String
    }

    type Episode {
        id: ID
        name: String
        episode: String 
        characters: [String]
        url: String
        created: String
    }

` 