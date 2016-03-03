# gdom-node

Port of <a href="https://github.com/syrusakbary/gdom">gdom</a> for node.js. Based on axios & cheerio.

You can play with it online : <a href="http://gdomenode-iamnoturkityy.rhcloud.com/?query=%7B%0A%20%20page(url%3A%22http%3A%2F%2Fnews.ycombinator.com%22)%20%7B%0A%20%20%20%20items%3A%20query(selector%3A%22tr.athing%22)%20%7B%0A%20%20%20%20%20%20rank%3A%20text(selector%3A%22td%20span.rank%22)%0A%20%20%20%20%20%20title%3A%20text(selector%3A%22td.title%20a%22)%0A%20%20%20%20%20%20sitebit%3A%20text(selector%3A%22span.comhead%20a%22)%0A%20%20%20%20%20%20url%3A%20attr(selector%3A%22td.title%20a%22%2C%20name%3A%22href%22)%0A%20%20%20%20%20%20attrs%3A%20next%20%7B%0A%20%20%20%20%20%20%20%20%20score%3A%20text(selector%3A%22span.score%22)%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D">DEMO</a>

##Install

```
npm i -S gdom-node
```

##Usage
Import `parse` function from `gdom-node`, then pass your query as argument, result of execution will be a promise:

```js
// using an ES6 transpiler, like babel
import {parse} from "gdom-node"

// not using an ES6 transpiler
var parse = require("gdom-node").parse

let query = `{
  page(url:"http://news.ycombinator.com") {
    items: query(selector:"tr.athing") {
      rank: text(selector:"td span.rank")
      title: text(selector:"td.title a")
      sitebit: text(selector:"span.comhead a")
      url: attr(selector:"td.title a", name:"href")
      attrs: next {
         score: text(selector:"span.score")   
      }
    }
  }
}`

parse(query).then(function(result){
    //do something
})
```
You can also import graphQL Schema, if you need it: 
```js
import {Schema} from "gdom-node"

//or

var Schema = require("gdom-node").Schema
```

##Test

```
npm test
```