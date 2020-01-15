import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';


class App extends Component {

  constructor() {    
    super();

    this.state = {

      monsters: []      
      
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

        { /* props are passed to compoents via HTML attributes 

            name will be a property passed into the prop with a value of PetriD
            
            { name: PetriD }
        
          
            Below name is a property of prop and PetriD is its value

        <CardList name="PetriD">

           
            This is where children of props are placed (inside of the component element)
            
            <h1>Chris Redfield</h1> will be passed in as children of the prop

            {
              name: PetriD,

              children: some sort of symbol since we are passing in an <h1>

            }

          

          <h1>Chris Redfield</h1>
        
        </CardList>
      */ }
        
        <CardList name="PetriD">
          { 
            this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name } </h1>)
          }
        </CardList>
          

      </div>
    );   
  }
}

export default App;