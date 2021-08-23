import React, {Component} from 'react';
import Header from './components/Header';
import Data from './components/Data';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  
  render(){
    return(
      <div className = "App">
        <Header />
        <Data />
        <Footer />
      </div>
    )
  }
}

export default App;
