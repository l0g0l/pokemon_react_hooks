import React from 'react';

import './card.css';

// name y url son los nombres de las props que le he pasado a Card
function Card(props) {
    console.log(props)


    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.url} alt={props.url} />
        </div>
    )
}

export default Card
