const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const graphql = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const fs = require('fs');
const db = require('./db');
const typeDefs = require('./typeDefs');

const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
app.use(cors(), bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = app;
