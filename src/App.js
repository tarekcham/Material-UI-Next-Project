import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './Components/Layouts/Header';
// import Footer from './Components/Layouts/Footer';
import Exercises from './Components/Exercises/index';
import {Header ,Footer} from './Components/Layouts'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>

      <Exercises/>

      <Footer/>

      </div>
    );
  }
}

export default App;
