import express from 'express'
import graphqlHTTP from "express-graphql"
import domParser from './src/graphql-dom'
import axios from 'axios'


const app = express();

app.use('/', graphqlHTTP({ schema: domParser, graphiql: true }));

app.listen(3000,()=>{
    console.log("App started at port 3000");
});