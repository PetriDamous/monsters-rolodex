import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {

      monsters: [],
      searchField: ''     
      
    }
  }
 
  componentDidMount() {
    
    fetch('https://jsonplaceholder.typicode.com/users')  
      .then(response => response.json())  
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    // We will be setting up a filter so that when the user types in the search field only the monster cards that contain letters
    // that are in the monster's name will return. Similar to todo and notes app.

    // First we will use object deconstruction to deconstruct our state object so we can use the properties from the state object.

    const { monsters, searchField } = this.state;

    // The above code is similar to:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    // Now we can use the .filter() array method to filter out monsters.

    // In the code below we are filtering the monsters array that we get from our state object.

    // toLowerCase() makes our filter searching case insenstive. 

    // We then pass in our new array (filteredMonsters) to our CardList component below as a value to the prop monsters.

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    // The reason why we are putting our filtered code inside of the render method is because,
    // whenever our searchField state changes, the render() method will run. 

    // When the render() method runs our filter method will run again and pass down the filtered monsters down to 
    // the CardList component.

    // render -> filter method is ran -> filtered array is passed to CardList component -> user changes searchField state ->
    // render method is ran with new state property update passed to our filter setup -> new filtered data is passed to CardList Component.
    
    return (      
      <div className="App">
        
        <input type="search" placeholder="search monster" onChange={ e => this.setState({ searchField: e.target.value }) } />

        {/* The prop in the CardList component will have a property of monsters that will have our filtered array as the value. */}

        <CardList monsters={filteredMonsters} /> 

      </div>
    );   
  }
}

export default App;