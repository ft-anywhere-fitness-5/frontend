import React, { useState } from "react";
import { connect } from "react-redux";
import { searchClasses } from "../actions";

const Search = (props) => {
    const initialvalues = {search:'',input:''}
    const [values,setValues]=useState(initialvalues)
    const handleSubmit=(e)=> {
        e.preventDefault();
        //take radio value text value
        //submit alter classlist by!
        //classList.filter(class=>[radiovalue.name]:input == item.radioname)
        //classList.keys.filter(class=>[radiovalue.name]:input == item.radioname
        props.searchClasses(values)
    }
    const handleChanges=(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const onclick = (e)=>{
        console.log(values)
    }
    return(

        <form className='searchArea' onSubmit={handleSubmit}>
            <h3>Search By</h3>
            <label>Name
            <input type='radio' name='search' value='class_name' onChange={handleChanges} onClick={onclick}/>
            </label>
            <label>Type
            <input type='radio' name='search' value='class_type' onChange={handleChanges} onClick={onclick}/>
            </label>
            <label>Start Time
            <input type='radio' name='search' value='class_start_time' onChange={handleChanges}/>
            </label>
            <label>Duration
            <input type='radio' name='search' value='class_duration' onChange={handleChanges}/>
            </label>
            <label>Intensity
            <input type='radio' name='search' value='class_intensity' onChange={handleChanges}/>
            </label>
            <label>Location
            <input type='radio' name='search' value='class_location' onChange={handleChanges}/>
            </label>
            <label>Class Size
            <input type='radio' name='search' value='class_max_size' onChange={handleChanges}/>
            </label>
            <input type='text'placeholder='search' name='input' onChange={handleChanges}/>
        </form>

        
    )
}

const mapStateToProps = (state) => ({
    classes: state.classes
})

export default connect(mapStateToProps,{searchClasses})(Search);