const bodyParser = require('body-parser');
const uuid = require('uuid');
const path = require('path');
const cors = require('cors');
const express = require('express');
const graphql = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const fs = require('fs');
const db = require('./db');
const typeDefs = require('./typeDefs');


const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
app.use(cors(), bodyParser.json());

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Server started on port ${port}`));// eslint-disable-line
