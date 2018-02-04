import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }
  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);//set the mapStateToProps
    this.setState({term:''});//clear the input box
  }
  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input value={this.state.term}
          onChange={this.onInputChange}
          placeholder="get a five day forecast"/>
        <button type="submit">Search</button>
      </form>
    )
  }
}

// function mapStateToProps({reducer}) {
//   return{reducer}
// }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
