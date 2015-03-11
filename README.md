# express-then [![npm version](http://img.shields.io/npm/v/express-then.svg?style=flat-square)](https://www.npmjs.org/package/express-then)

> [Express] handlers with promise support.

[Express]: http://expressjs.com/

Example
-------

```js
const then = require('express-then')

app.get('/', then(async (req, res) => {
  await foo()
  await bar()

  res.end()
})
```
