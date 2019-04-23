var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser');

const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./graphql/schema');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const customerRoute = require('./routes/customer-route')
const mappingRoute = require('./routes/mapping-route');
mappingRoute(app);
customerRoute(app);

const server = new ApolloServer({typeDefs,resolvers});

app.listen(port);
server.applyMiddleware({ app });

console.log('RESTful API server started on: ' + port);