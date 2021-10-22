import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { useHistory } from 'react-router';

function Class(props) {
    const {classItem, deleteClass} = props
    const itemID = classItem.class_id

    const history = useHistory()
    const handleReserve=()=>{
        axiosWithAuth()
        .post('https://ft-anywhere-fitness-5.herokuapp.com/api/user',classItem)
        .then(resp=>{
            console.log(resp.data)
        })
    }
    const handleEdit=()=>{
        //take the itemID
        //history.push to an edit form with The ID taking up State
        console.log(itemID)
        history.push(`./edit/${itemID}`)
    }
    const handleDelete = () => {
        axiosWithAuth().delete(`https://ft-anywhere-fitness-5.herokuapp.com/api/classes/${itemID}`)
          .then(res => {deleteClass(itemID)})
          .catch(er=>{console.log(er)})
          //deleteClass(itemID)
    
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
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
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