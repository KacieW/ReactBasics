import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search-bar';
import HeaderBar from './header-bar';
import Forecast from './forecast';
import ReactRouter from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <div>
        <Route path='/' render={function(props){
          return (
            <div className="headerSection">
              <div>Weather App</div>
            </div>
          )
        }} />
        <Route exact path='/' render={function(props){
          return(
            <div className="mainSection">
              <SearchBar onSubmitSearchBar = {
                function(city){
                  props.history.push({
                    pathname:'forecast',
                    search: '?city='+city
                  }
                )}
              }  />
              </div>
          )
        }} />
        <Route path='/forecast' component={Forecast} />
        </div>
        </BrowserRouter>
    )
  }
}
export default App;
