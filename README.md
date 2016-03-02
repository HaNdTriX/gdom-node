# gdom-node

Port of <a href="https://github.com/syrusakbary/gdom">gdom</a> for node.js. Based on axios & cheerio.

##Install

```
npm i -S gdom-node
```

##Usage
Import `parse` function from `gdom-node`, then pass your query as argument, result of execution will be a promise:

```js

import {parse} from "gdom-node"

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

parse(query).then((result)=>{
    //do something
})
```
You can also import graphQL Schema, if you need it: 
```js
import {parse, Schema}
```

##Test

```
npm test
```