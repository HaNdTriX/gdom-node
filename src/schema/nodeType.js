import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLUnionType
} from 'graphql'

import cheerio  from 'cheerio'

const selector = {
    type:GraphQLString,
    description:"DOM element selector"
};



const Node = new GraphQLObjectType({
    name:"Node",
    fields(){
        return {
            text: {
                type: GraphQLString,
                args:{selector},
                resolve(root, args){
                    if(args.selector){
                        return cheerio(args.selector, root).text()
                    }else{
                        return cheerio(root).text()
                    }
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
                    if(args.selector){
                        return  cheerio(args.selector, root).attr(args.name)
                    }else{
                        return  cheerio(root).attr(args.name)
                    }
                }
            },
            next:{
                type: Node,
                args:{selector},
                resolve(root, args){
                    if(args.selector){
                        return cheerio(args.selector, root).next()
                    }else{
                        return cheerio(root).next()
                    }
                }
            },
            nextAll:{
                type:new GraphQLList(Node),
                args:{selector},
                resolve(root, args){
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
                    if(args.selector){
                        return cheerio(args.selector, root).get(0).tagName
                    }else{
                        return cheerio(root).get(0).tagName
                    }
                }
            },
            html:{
                type:GraphQLString,
                args:{selector},
                resolve(root, args){
                    if(args.selector){
                        return cheerio(args.selector, root).html()
                    }else{
                        return cheerio(root).html()
                    }
                }
            },
            parent:{
                type:Node,
                resolve(root){
                    return cheerio(root).parent()
                }
            },
            query:{
                type:new GraphQLList(Node),
                args:{selector},
                resolve(root, args){
                    let items = cheerio(args.selector, root);
                    let arr = [];
                    items.each(function(i, item){arr.push(item)});
                    return arr
                }
            }
        }
    }
});





export default Node
