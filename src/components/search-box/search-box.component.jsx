import React from 'react';
import './search-box.styles.css';

// Since props are objects we can use destructuring in our argument 
// to destructure our prop. 

// Works the same way as before but we do not need to store the properties inside of variables. 

// Instead we can use them as regular arguments.

// Now we can use this component over again in this project or another project. 

// We may never have to touch the code in here since the functionailty will be the same. 

// The data we pass to it will be modified through the props.

export const SearchBox = ({ placeholder, handleChange }) => {   
    
    return <input 
                className="search"
                type="search" 
                placeholder={ placeholder } 
                onChange={ handleChange } 
            />
}