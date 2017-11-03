# Prerequisites install

- Node.js of course. 
- Browserify
```js
$ npm install --global browerify
$ browserify --version //to verify if it is working 
```
- Babel
```js
$ npm install --global babel-cli
```
- React
In your app directory 
```js
$ npm install --save-dev react
$ npm install --save-dev react-dom
$ npm install --save-dev babel-preset-react
$ npm install --save-dev babel-preset-es2015
```
By this point, the app now has a node_modules directory with the local packages and their dependencies.
