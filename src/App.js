import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
        
        {/* We are going to convert our input search bar into a reusable component.

        Our SearchBox component is a functional component which does not have access to state or life cycle methods.
        Class components have access to state and life cycle methods.

        Functional compoents are good if you do not need access to state and life cycle methods. If you just need to 
        render an HTML from a component (and pass some props to it) then functional components are the way 
        to go.

        Functional components are also easier to test than class based components.

        If you do not need access to state and life cycle methods just use a functional component.

        We pass in "search monters" for our placeholder prop property.
        This will allow us to change the place holder text dynamically so we can use this compoenent else where
        and use different place holder text depending on our needs.

        In order for our functional component to have access to state we will put any state changes
        inside of our class component and pass them into our functional compoent via props.
        This way when the onChange event listener in our SearchBox component will fire off the function 
        that we are passing in as a prop but the code will be ran here where it has access to state.     */}

        <SearchBox          
          placeholder="search monsters"
          handleChange={ e => this.setState({ searchField: e.target.value }) } 
        />
        
        <CardList monsters={filteredMonsters} /> 

      </div>
    );   
  }
}

export default App;