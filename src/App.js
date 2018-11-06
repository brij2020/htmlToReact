import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <hr />
      <Home /> 
      <Footer />
      </div>
    );
  }
}

export default App;
