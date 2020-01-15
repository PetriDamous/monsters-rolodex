import React from 'react';

// Imports css
import './card-list.styles.css';

/*

props are JavaScript objects passed into React components as arguments

*/

// Below is our CardList component which is a functional component in this case
// props used as an argument to be passed into our component
export const CardList = props => {
    // PetriD would show in the console because that is the 
    // value of the prop property that we gave on the App.js
    console.log(props);

    // Will console out a symbol since we are using HTML elements
    // If we where to just pass in a string such as 'dog' then 'dog' would 
    // console out as a regular string
    console.log(props.children);

    // Note: We cannot directly pass in props to the return below (return <div>{prop}</div>)
    // or we will get an error.
    // We can only pass in children of props (return <div>{props.children}</div>)
    // This will render our <h1>Chris Redfield</h1> from App.js
    return <div className="card-list">{ props.children }</div>

}