import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


// In our App class the keyword this will be bound to the App class. 

// We can use the keyword this inside of our life cycle methods and the render method 
// because these methods are written from the Component class that we extended from so 
// our App class has access to these methods as well and since it has access the keyword 
// this will be bound to our App when we use that keyword.

class App extends Component {

  constructor() {  
    
    // super() gives us access to methods and anything else the Component class has.


    super();

    this.state = {

      monsters: [],
      searchField: ''

    }

    // We can place the below code in our constructor method so the keyword this context will be set to 
    // our App class.

    // We can do this because the constructor method runs first before anything else in the class.

    // .bind() is a method on any function that returns a new function where the context of the keyword this is set 
    // to what we passed to it.

    // The this that we are passing into .bind() is the keyword this that is defined inside of our constuctor method.

    // The keyword this defined inside of our constructor method refers to our App class.

    // This is not the ideal way to write our own methods and bind the keyword this to them. 

    // For every new method we would have to write code similar to the code below.

    // this.handleChange = this.handleChange.bind(this);


  }
 
  componentDidMount() {

    // We can use the keyword this inside of the life cycle method because the life cycle method 
    // was extended from the Component class which the method was written for. 

    // Since we are extending from the Component class to our App class the keyword this will be bound to 
    // our App class.

    // Might want to review classes as this is a basic concept of prototyping and class based structure in  
    // JavaScript.
    
    fetch('https://jsonplaceholder.typicode.com/users')  
      .then(response => response.json())  
      .then(users => this.setState({ monsters: users }));
  }

  // By default functions in JavaScript do not set the context of the keyword this. 

  // You have to explictly set the context of the keyword this inside of function to what you
  // want it to be.
  

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // Because of lexical scoping, arrow functions allow us to bind the keyword this as they are defined. 

  // Rewatch video if needed. 

  // Using this way we do not have to bind the keyword this inside of the constructor. 

  // ES6 arrow functions do this for us when they are defined. 

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    // For the same reasons that the life cycle methods bind the keyword this to our App class, 
    // render binds the keyword this to our App class for the same reasons.

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    
    return (      
      <div className="App">

        <SearchBox          
          placeholder="search monsters"

          // We will have access to our method using the keyword this and the name of the method.

          handleChange={ this.handleChange } 
        />
        
        <CardList monsters={filteredMonsters} /> 

      </div>
    );   
  }
}

export default App;