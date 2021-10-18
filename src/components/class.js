import React from 'react';

function Class({ details }) {
if (!details) {
    return <h3>Getting class list please wait...</h3>
    }



    return (
        <div className='card container'>
            <h2>{details.classname}</h2>
            <p>Type:{details.classType}</p>
            <p>Start:{details.start}</p>
            <p>Duration:{details.duration}</p>
            <p>Intensity{details.intensity}</p>
            <p>Where:{details.location}</p>
            <p>People registered:{details.registered}</p>
            <p>Max class size:{details.maxSize}</p>
        </div>
    )
}

export default Class;