import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLEnumType,
    GraphQLID
} from 'graphql'

import cheerio from 'cheerio'

const selector = {type:GraphQLString};


const Node = new GraphQLObjectType({
    name:"ElementName",
    fields(){
        return {
            text: {
                type: GraphQLString,
                args:{selector},
                resolve(root, args){
                    return cheerio.load(root)(args.selector).text()
                }
            },
            attr:{
                type:GraphQLString,
                args:{
                    name:{
                        type:GraphQLString,
                        description:'Name of needed attribute'
                    },
                    selector
                },
                resolve(root, args){
                    return  cheerio.load(root)(args.selector).attr(args.name)
                }
            },
            query:{
                type:new GraphQLList(Node),
                args:{selector},
                resolve(root, args){
                    let items = root(args.selector);
                    return Object.keys(items).map(i => items[i])
                }
            }
        }
    }
});

export default Node
