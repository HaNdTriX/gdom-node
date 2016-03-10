import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import nodeType from './nodeType';
import axios from 'axios';

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      page: {
        type: nodeType,
        args: {
          url: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Page url'
          }
        },
        resolve(root, args) {
          return axios.get(args.url)
            .then(response => response.data);
        }
      }
    }
  })
});
