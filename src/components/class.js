import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

function Class(props) {
    const {classItem} = props

    const handleReserve=()=>{
        axiosWithAuth()
        .post('https://ft-anywhere-fitness-5.herokuapp.com/api/user',classItem)
        .then(resp=>{
            console.log(resp.data)
        })
    }
    
    return (
        <ClassStyle className='card container'>
            <h2>{classItem.class_name}</h2>
            <p>Type:{classItem.class_type}</p>
            <p>Start:{classItem.class_start_time}</p>
            <p>Duration:{classItem.class_duration} min</p>
            <p>Difficulty:{classItem.class_intensity}</p>
            <p>Where:{classItem.class_location}</p>
            <p>People registered:{classItem.class_registered_attendees}</p>
            <p>Max class size:{classItem.class_max_size}</p>
            {/* Buttons */}
            {localStorage.getItem('token') ? 
            (localStorage.getItem('role') !== 'instructor' ? 
            <button onClick={handleReserve}>reserve</button> : 
            <div>
            <button>edit</button>
            <button>delete</button>
            </div>): <></>}
            
        </ClassStyle>
    )
}

export default Class;

const ClassStyle = styled.div`
    /*font styles inherited from classList*/
    border: solid gold 5px;
    border-radius: 15px;
    background: #4f4f4f;
`