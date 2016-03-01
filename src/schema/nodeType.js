import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql'

import cheerio  from 'cheerio'

const selector = {type:GraphQLString};


const Node = new GraphQLObjectType({
    name:"Node",
    fields(){
        return {
            text: {
                type: GraphQLString,
                args:{selector},
                resolve(root, args){
                    return cheerio(args.selector, root).text()
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
                    return  cheerio(args.selector,root).attr(args.name)
                }
            },
            next:{
                type:Node,
                args:{selector},
                resolve(root, args){
                    return cheerio(root).next(args.selector)
                }
            },
            nextAll:{
                type:new GraphQLList(Node),
                args:{selector},
                resolve(root,args){
                    let items = root(args.selector);
                    let arr = [];
                    items.each(function(i, item){arr.push(item)});
                    return arr
                }
            },
            tag:{
                type:GraphQLString,
                args:{selector},
                resolve(root, args){
                    return cheerio(args.selector, root).get(0).tagName
                }
            },
            html:{
                type:GraphQLString,
                args:{selector},
                resolve(root, args){
                    return cheerio(args.selector, root).html()
                }
            },
            query:{
                type:new GraphQLList(Node),
                args:{selector},
                resolve(root, args){
                    let items = root(args.selector);
                    let arr = [];
                    items.each(function(i, item){arr.push(item)});
                    return arr
                }
            }
        }
    }
});

export default Node
