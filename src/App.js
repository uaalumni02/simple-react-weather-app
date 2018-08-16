import React, { Component } from 'react';
import Search from './components/main/Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="nav">
        <header className="navBar">
  {/* <a  href="#">Search</a>
  <a  href='Results'>Results</a>  */}
        </header>
        <br></br><br></br><br></br>
        <h1 align="center"> <strong> React Weather App </strong> </h1>
        <Search />
      </div>
    );
  }
}

export default App;
