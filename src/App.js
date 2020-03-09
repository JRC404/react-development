import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Person from './Person/Person';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I am a React App</h1>
        <Navbar />
        <Person />
        <Footer />
      </div>
    )
  }
}

export default App;
