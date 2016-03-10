import { Schema } from './schema/parserSchema';
import { graphql } from 'graphql';

export const parse = (query) => graphql(Schema, query);


export { Schema } from './schema/parserSchema';
