# Redux and Reducer

Redux is managing the **Application State**. The Application State is a *single plain javascript object*.
```js
//Application State
{
  books: [{title:'Hello world'}, {title:'Say goodbye'}],
  activeBook: {title:'Hello world'}
}
```
Reducers : is used to form **Application State**. All the reducers are bind together by `combineReducers`, which is located in
`reducer/index.js` file. Inside `combineReducers` function, it has a key-value pair, the value is actually the each reducer.
Anything returned from the reducer is assigned to the key.
```js
var asdf = combineReducers({
  books : BookReducer,
  activeBook: ActiveBook
})
```
Each reducer : is responsible for changing **Application State**. It completes through 'action'. When an action is dispatched, 
it was sent to all reducers. Then each reducer will choose to return somthing or nothing based on the 'type'. 
Reducer has two arguments:current state and action.
```js
export default function(state=null, action){
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
```

Action creators: it is function returns an action (which is a plain javascript object). It must have a `type`, and some properties(optional).
```js
function(){
  return {
    type: BOOK_SELECTED,
    payload: {title:'Book'}
  }
}
```
