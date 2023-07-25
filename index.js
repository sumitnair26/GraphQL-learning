import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//db
import db from './_db.js'

//types

import { typeDefs } from './schema.js';

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        authors() {
            return db.authors
        }
    }
}

/* 
games {
    title  
}
*/

//server setup
const server = new ApolloServer({
    //typeDefs (Datatype and relationship with other data type )
    /* deefination of type od data */
    typeDefs,
    //resolver
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)