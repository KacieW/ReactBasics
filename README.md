# ReactBasics
Things that I learned from React

## Basic Set ups
When first create a Reach Porject, the `index.html` will be the file to kick off the project. It just has a container for all browser to 
render, and a script tag with the access to the `bundle.js`, which it will contains all the compiled js code by Webpack and Babel.

There should be a `package.json` file, which will have all the config and dependencies of project. We can add dependency using `npm`.
Then create a src folder for all the components we will build and a index.js file. **It is pretty a good habit to keep one component per 
file**. So in the `index.js` file, we'd better to create one componenet to be the parent of all other components.

#### 1. Import libraries or components to the index.js file.
  - `import React from 'react'`: it means we import the 'react' libaray to this file and given a name called *React*. 'react' is the core
  library that can **create and manage Componenets**, but it doesn't know how to put components in the DOM.
  - `import ReactDOM from 'react-dom'`: This is the libaray to **deal with the DOM**
  - `import YTSearch from 'youtube-api-search'`: This is how we import the dependency we added to the project
  - `import SearchItem from './foldername/searchItem'` : how to import other componenets we created to this file.
  
#### 2. Create components.
There are two ways to create them. One is by Functional Components, the other is by Class Components. 
  - *Functional Components* is pretty simple. It just create a component by function. **Component name should be capital**. 'Welcome' is only
  a class for now, not an instance of the component. We need to create a instance for it to render it to the DOM. 
  ```js
  function Welcome(props){
    return <h1>Hello!</h1>;
  }
  //ES6
  Welcome = () => {return <h1>Hello!</h1>};
  ```
  - *Class Components*: Use a class to extends React.Component. It is used for internal recored keeping, which means it will be aware of 
  what happened to itself when rendering. **Every class based component we created must has a `render()` method.** Also, it should has a 
  **`constructor()` function and a `state` object**. 
    - constructor(props): is the first and only function called automatically, whenever a new instance was created. Inside of it, should has
    a function called `super(props)`, and initialize the state by creating a new object, and assign it to this.state.
    ```js
    constructor(props){
      super(props);
      this.state = {};
    }
    ```
    - State : is a js object that used to record and react with user events. **When the compenent state changes, the component and all of
    it's childern will get re-render immediately.** `this.setState()` is used to change the status of the `state`.
    
#### 3. Render the component on the DOM

  `ReactDOM.render()` is used to take the componenet's generated HTML and put is in the DOM. It takes two parameters. One is the instance
  of the component `<Welcome / >`, the second is the reference of the existing DOM node, which means where to put it on the DOM.
  ```js
  ReactDOM.render(<Welcome />, document.querySelector('.container'));
  ```
