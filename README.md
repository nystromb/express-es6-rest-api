Express & ES6 REST API Boilerplate
==================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

Getting Started
---------------

```sh
# clone it
git clone git@github.com:nystromb/express-es6-rest-api.git
cd express-es6-rest-api

# Install dependencies
npm install

# Running tests
npm test

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

License
-------

MIT
