/*

We can create components using either a function that returns some HTML or a class that does the same thing.

When using Class Components you have access to state, which makes Class Components a little more flexible.

Class Components have more functionality than function based components.

State in React:

JavaScript object with properties that we can access at any point within in our class.

*/

// In order to write Class based components we need to import Component from react
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// Class Component
// Extended from Compoenent class in react lib
class App extends Component {

  constructor() {
    // super() gives us access to state from Component
    super();


    // state property is now accessiable to our App class
    this.state = {

      // setting property on our state object
      string: 'Hello PetriD!!!!'
    }
  }

  // Since we are writing a class component we have access to the render() method via Component
  // The render() method renders/returns whatever JSX we through at it
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Anything between {} in JSX will evaluate a JavaScript Expresstion */}

            {/* We not have Access to our string property from our state object */}
            { this.state.string }
          </p>

          {/*
            onClick is an event listner. Works the same way as regular HTMLs on click event listener
          
            setState is method imported from the Component class
            setState takes an object as an argument
            the object inside the argument are all the properties for our state that we wish to change
          */}
          <button onClick={ () => this.setState({ string: 'Hello Chris Redfield?!@#$' }) }>Click to change text</button>
        </header>
      </div>
    );   
  }
}

export default App;

/*

We cannot change state unless we use the setState method

Flow of state change in React:

setState() triggered -> state on compoenent changes -> DOM is re rendered based on newly changed state of component

Example:

button click with setState attached to it -> setState changes state of component -> DOM is re rendered based on state change of component


*/
