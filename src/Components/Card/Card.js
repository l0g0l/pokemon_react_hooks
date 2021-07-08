import React from 'react';

import './card.css';

// name y url son los nombres de las props que le he pasado a Card
function Card(props) {
    console.log(props)
   

    return (
        <div>
            <h2>Nombre:</h2><p>{props.name}</p>
            <img src={props.url} alt={props.url}/> 
        </div>
    )
}

export default Card
