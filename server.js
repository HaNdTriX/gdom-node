import express from 'express'
import graphqlHTTP from "express-graphql"
import gdom from './src/gdom-node'


const app = express();


app.use('/', graphqlHTTP({ schema: gdom.Schema, graphiql: true }));

app.listen(3000,()=>{
    console.log("App started at port 3000");
});