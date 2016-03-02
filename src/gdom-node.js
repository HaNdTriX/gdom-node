import {Schema} from './schema/parserSchema'
import {graphql} from "graphql"

export const parse = (query)=> {
  return graphql(Schema, query);
};
