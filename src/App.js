import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {
      // New property for state
      monsters: [

        {
          // React uses a key to keep track of objects
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
          // Key is an attribute used by React to keep track of each unique object

          // We are using the map() method to access our state and print the names
          // of our monsters as <h1> to the screen

          // Usually when using .map() we will get a new array
          // but React is smart enough to know that when we pass in HTML via JSX
          // that it should render these elements as HTML elements
          this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name } </h1>)
        }
      </div>
    );   
  }
}

export default App;

/*

React uses a key attribute to keep track of unique elements

It does this because the data of an element can change but we can uses an unuiqe id to keep track of that element even though the data changed

This is similar to our notes and todo app where we wanted to keep track of each object in an array using an id to identify that particular object

React needs to know what needs to be updated if values changed and IDs help with this

With IDs React to identify which element needs to be updated and only update that single element

This helps prevent React from re rendering the entire DOM when one element changes

*/