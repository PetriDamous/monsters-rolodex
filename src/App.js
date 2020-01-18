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

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    
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