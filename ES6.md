If the object's key and value are the same, we can just use one single word for it
```js
this.state = {name :''};
function (name) {
  this.setState({name : name}); //key and value are the same
}
//ES6
this.state = {name :''};
(name) => {this.state({name})}; //use jsut 'name' to represent for all.
```
