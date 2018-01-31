import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {term: ''};
  }
  onInputChange(inputTerm){
    this.setState({term:inputTerm});
    this.props.onSearchTermChange(inputTerm);
  }
  render(){
    return(
      <div>
        <input className='input-bar' value = {this.state.term} onChange={(event)=>{return this.onInputChange(event.target.value)}}/>
      </div>
    )
  }
}
export default SearchBar;
