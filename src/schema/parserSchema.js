import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import pageType from './pageType';
import axios from 'axios';
import cheerio from 'cheerio'

const Schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            page: {
                type:pageType,
                args: {
                    url:{
                        type: new GraphQLNonNull(GraphQLString),
                        description: "Page url"
                    }
                },
                resolve(root, args){
                  return axios.get('https://www.yandex.ru/')
                      .then( response => cheerio.load(response.data))
                }
            }
        }
    })
});
export default Schema;