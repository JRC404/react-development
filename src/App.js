import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I am a React App</h1>
        <Navbar />
        <Person />
      </div>
    )
  }
}

export default App;
