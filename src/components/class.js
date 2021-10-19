import React from 'react';


function Class(props) {
    const {classItem} = props
    // if details doesnt load right away

    //will put something like this in ClassList else it produces many
    // if (!props) {
    //     return <h3>Getting class list please wait...</h3>
    // }

    
    return (
        <div className='card container'>
            <h2>{classItem.class_name} </h2>
            <p>Class: {classItem.class_type}</p>
            <p>Start: {classItem.class_start_time}🕥</p>
            <p>Duration: {classItem.class_duration} minutes</p>
            <p>Difficulty: {classItem.intensity}</p>
            <p>Where: {classItem.location}</p>
            <p>People registered: {classItem.registered}</p>
            <p>Max class size: {classItem.maxSize}</p>
        </div>
    )
}

export default Class;