import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router-dom';
import api from '../utils/api';



class SearchBar extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {city:""};

    this.handleSubmitSearchBar = this.handleSubmitSearchBar.bind(this);
  }

  handleSubmitSearchBar(){
    // api.getCurrentWeather(this.state.city)
    // .then(function(res){
    //   console.log(res);
    // });
    this.props.onSubmitSearchBar(this.state.city);
    this.setState(function(){
      return {city:''}//reset input box to null
    })
  }
  render(){
    console.log('PROPS', this.props);
    return (
      <div>
        <h2 className='header'>Enter the city</h2>
        <input className="inputBox"
          value = {this.state.city}
          onChange={(event)=>{return this.setState({city:event.target.value});
          }}
         />
         <button className="submitButton"
          type="submit"
          onClick={this.handleSubmitSearchBar}
          >Get Weather</button>
      </div>
    )
  }
}
export default SearchBar;
