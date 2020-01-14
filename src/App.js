import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {
      
      // Our monsters property will start out as an empty array
      // Once our component mounts (renders to the page) it will make an API call
      // and populate the empty array
      monsters: []      
      
    }
  }

  /*
  
  Life cycle methods:

  Methods that get called at different stages when a component in React gets rendered.

  Life cycle methods come from the Component class from the react lib.

  componentDidMount() 

  Mounting is when React renders a component on the page.

  componentDidmount() runs a block of code when React renders that component to the page.  
  
  */

  // Runs when our component renders/mounts on the page
  componentDidMount() {

    // The fetch api is used to fetch data from an api
    // The fetch api automatically has a promise built in so we do not need to use the constructor to declare a new promise
    // Resolve and Reject are built into the fetch api
    // We can use .then() and .catch() method out of the box since the fetch api already is a promise
    fetch('https://jsonplaceholder.typicode.com/users')

      // .json() method is a method used on a response object to translate JSON to
      // a JavaScript object
      .then(response => response.json())

      // With our JSON now parsed to a JavaScript object we can now set the state of our component
      // Our state for the monsters parameter is now set to the array we get from
      // parsing the JSON object from the prevous .then()
      .then(users => this.setState({ monsters: users }));
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