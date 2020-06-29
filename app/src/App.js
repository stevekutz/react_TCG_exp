import React from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'

function App() {
  return (
    <div className="App">
        <h1> Starter App</h1>

        <Person name = "Joe" age = "24" />
        <Person name = "Alex" age = "12"> Hobbies are gaming, gaming, ... </Person>
        <Person name = "Joe" age = "45" />
    </div>
  );
}

export default App;
