import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';
import { render } from '@testing-library/react';

export const CardList = props => {

    // In here we are passing the state property of monsters to our CardList component 
    // so that it can pass the neccesary monster properties to our Card component.

    // The CardList component is responsible for for rendering each individual Card
    // and passing down the neccesary monster infromation from state to each card. 

    // Here we are using the .map() array method to create the indivdual Card components 
    // and pass on the information needed via props.

    // We pass the monster.id as a key on the Card component itself.
    // We do this so React can keep track of the list of Card components
    // so that it can change the data later if needed and it will only have to re render
    // that single Card component instead of the whole entire DOM. 


    // We then pass each individual monster from the .map() to the Card
    // component via props.

    return <div className="card-list">

    { 
        props.monsters.map(monster => <Card key={ monster.id } monster={ monster }/>)
    }

    </div>
}