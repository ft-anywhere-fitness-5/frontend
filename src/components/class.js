import React from 'react';

function Class(props) {

    // if details doesnt load right away
    if (!props) {
        return <h3>Getting class list please wait...</h3>
    }

    
    return (
        <div className='card container'>
            <h2>{props.className} {props.id}</h2>
            <p>Type:{props.classType}</p>
            <p>Start:{props.start}</p>
            <p>Duration:{props.duration}</p>
            <p>Difficulty{props.intensity}</p>
            <p>Where:{props.location}</p>
            <p>People registered:{props.registered}</p>
            <p>Max class size:{props.maxSize}</p>
        </div>
    )
}

export default Class;