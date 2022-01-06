// const { ApolloServer } = require("apollo-server")
// const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core")
// const { typeDefs } = require('./schema')
// const { resolvers } = require('./resolvers')
import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { typeDefs } from "./schema.js"
import { resolvers } from "./resolvers.js"

const server = new ApolloServer({ typeDefs, resolvers, plugins: [ ApolloServerPluginLandingPageGraphQLPlayground() ] })

server.listen().then(({url}) => {
    console.log(`   🚀 Server ready at ${url}`);
})