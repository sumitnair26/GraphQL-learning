import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//types

import { typeDefs } from './schema.js';

//server setup
const server = new ApolloServer({
    //typeDefs (Datatype and relationship with other data type )
    /* deefination of type od data */
    typeDefs,
    //resolver
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)