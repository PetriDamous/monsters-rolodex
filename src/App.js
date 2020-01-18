import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {
      /*
      
      The current state of our monsters porperty is an empty array.

      Once our compoent is rendered on the page (mounted) the empty array will be
      replaced with a populated array from our API call.    

      */

      monsters: []      
      
    }
  }
 
  componentDidMount() {

    /*
    
    We run our componentDidMount() the fetch api will return a JSON object
    in which we turn into a JavaScript object and pass it to state to 
    change the current state of our empty monsters property into a populated
    array.
    
    */
    
    fetch('https://jsonplaceholder.typicode.com/users')  
      .then(response => response.json())  
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (      
      <div className="App">

        {/* We now pass the state of the monsters propety to the CardList component

        The CardList component will be responiable for holding our cards and passing
        the neccessary information to all of our individual cards. */}
        
        <CardList monsters={this.state.monsters} />             

      </div>
    );   
  }
}

export default App;