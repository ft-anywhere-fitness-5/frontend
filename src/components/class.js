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
            <h2>{classItem.class_name}</h2>
            <p>Type:{classItem.class_type}</p>
            <p>Start:{classItem.class_start_time}</p>
            <p>Duration:{classItem.class_duration} min</p>
            <p>Difficulty:{classItem.class_intensity}</p>
            <p>Where:{classItem.class_location}</p>
            <p>People registered:{classItem.class_registered_attendees}</p>
            <p>Max class size:{classItem.class_max_size}</p>
            {/*instructors can edit/update/delete class with auth */}
        </div>
    )
}

export default Class;