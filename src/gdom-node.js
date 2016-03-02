import {Schema} from './schema/parserSchema'
import {graphql} from "graphql"

const parse = (query)=> {
  return graphql(Schema, query);
};

const gdom = {
    Schema,
    parse
};
export default gdom