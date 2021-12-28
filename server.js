const express = require('express');
const  { graphqlHTTP: expressGraphQL } = require('express-graphql');


const app = express();

// Registering Route - /graphql to the function returned from the expressGraphQL
app.use('/graphql', expressGraphQL({
    graphiql: true
}));


const PORT = 4000;
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})