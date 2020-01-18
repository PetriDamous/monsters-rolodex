import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {

      monsters: [],

      // searchField will be our new state property for keeping track of the state change
      // on the search field. 

      // We start it out as an empty string much like our todo and notes app.

      // As the user types data into the search field changing the state of the component
      // the new value of search field will be stored in our searchField property.

      searchField: ''      
      
    }
  }
 
  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')  
      .then(response => response.json())  
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (      
      <div className="App">

        {/* We are using an input element for a search bar so we can search for monsters.

        type="search" tells the input element we want to use the search field input element.

        placeholder is just place holder text the will be inside the search field until the user
        types something in.

        onChange is where we can run a Synthetic event that will fire a function.

        The function inside of onChange has access to an argument parameter called event.
        Event will fire off when the value of the search field changes.
        Event will return the event object.

        Inside the event object we have access to slew of properties. The one we are concerned with
        is the target property.

        The target property will return the HTML element that the function is being fired off on.
        In this example when the user types in the search field the event will be fired and if target is used
        (e.target) the HTML that is the target will be returned. In this case the search field.


        We can add value to e.target to get the value that is placed/typed into the search field.
        
        Note: If we wanted to console.log our setState value we would have to use a call back function:

        <input type="search" placeholder="search monster" onChange={ e => this.setState({ searchField: e.target.value }, console.log(this.state)) } />
        
        Instead of console.log right after this.setState():
        
        <input type="search" placeholder="search monster" onChange={ e => this.setState({ searchField: e.target.value }) console.log(this.state) } />
        
        The reason we have to use a call back instead  calling console.log right after this.setState() is because setState() is an 
        asynchronus function call meaning that setState() will fire off and return a value once it gets done running and will not block any code while
        it is performing its actions. */}
        
        <input type="search" placeholder="search monster" onChange={ e => this.setState({ searchField: e.target.value }) } />

        {/* <CardList monsters={this.state.monsters} />              */}

        <CardList monsters={this.state.monsters} /> 

      </div>
    );   
  }
}

export default App;