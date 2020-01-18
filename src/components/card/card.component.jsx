import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    
    // The Card component will be responsible for rendering each indivdual Card
    // as we loop through the creation of cards from the CardList component. 

    // By passing each individual monster via props we now have access to each 
    // monsters properties such as name and email.

    // We also passed in the monster's id into the image url so that we can have a unquie 
    // monster picture for each Card.

    // This is more for using MonsterHash which gives us unique monster pictures depending 
    // on the number in the ${props.monster.id} part of the URL.
    
    // We are passing in the monsters id to dynamically give it numbers to fetch different
    // pictures.

    return <div className="card-container">

        <img src={ `https://robohash.org/${props.monster.id}?set=set2&size=180x180` } alt="monster"></img>
        <h2> { props.monster.name } </h2>
        <p> { props.monster.email }</p>
        
    </div>
}