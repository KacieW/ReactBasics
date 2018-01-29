import React from 'react';
import ReactDOM from 'react-dom';

class HeaderBar extends React.Component{
  render() {
    return(
      <div className="headerSection">
        <div className="headerTitle">Weather</div>
        <input className="headerSection-inputBox"/>
        <button className="headerSection-submitButton">Get Weather</button>
      </div>
    )
  }
}
export default HeaderBar;
