import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLEnumType,
    GraphQLID
} from 'graphql'

let pageType = new GraphQLObjectType({
    name:'pageType',
    description: "Page for parse",
    fields(){
        return {
            text: {
                type: GraphQLString,
                args:{
                    selector:{
                        type:GraphQLString
                    }
                },
                resolve(page, args){
                    return page(args.selector).text()
                }
            }
        }
    }
});
export default pageType
