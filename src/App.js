import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor() {
    super()
    
    this.state = {
      monsters: [
        {name: 'Frankenstein'},
        {name: 'Dracula'},
        {name: 'Zombie'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, i) => <h1 key={monster.name + "_" + i}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
