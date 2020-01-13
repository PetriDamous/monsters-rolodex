import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {
      
      monsters: [

        {
          
          id: 1,
          name: 'Chris Redfield'
        },

        {
          id: 2,
          name: 'Jill Valentine'
        },

        {
          id: 3,
          name: 'Barry Burton'
        },

      ]

      
      
    }
  }

  render() {
    return (
      <div className="App">
        { 
          this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name } </h1>)
        }
      </div>
    );   
  }
}

export default App;