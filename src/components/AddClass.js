import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddClass = () => {
    const initialValues={
        class_duration: "0",
        class_intensity: "",
        class_location: "",
        class_max_size: "10",
        class_name: "",
        class_start_time: "",
        class_type: "",
        class_registered_attendees: "0"
    }
    const [values, setValues] = useState(initialValues)

    const onChange = evt => {
        const {name,value}= evt.target;

        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        setValues({...values, class_duration: (values.class_duration + ' min')})
        axiosWithAuth().post('https://ft-anywhere-fitness-5.herokuapp.com/api/classes/',values)
        .then(resp=>{
            console.log(resp.data)
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(values)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Class Name
                <input value={values.class_name} onChange={onChange} name='class_name' type='text'/>
            </label>
            <br/>
            <label>Type
                <input value={values.class_type} onChange={onChange} name='class_type' type='text'/>
            </label>
            <br/>
            <label>Intensity
                <select value={values.class_intensity} onChange={onChange} name='class_intensity'>
                    <option>choose</option>
                    <option>low</option>
                    <option>average</option>
                    <option>high</option>
                    <option>flippin nutz, kid</option>
                    </select>
            </label>
            <br/>
            <label>Duration
                <input value={values.class_duration} onChange={onChange} name='class_duration' type='number'/>min
            </label>
            <br/>
            <label>Class Size
                <input value={values.class_max_size} onChange={onChange} name='class_max_size' type='number'/>
            </label>
            <br/>
            <label>Location
                <input value={values.class_location} onChange={onChange} name='class_location' type='text'/>
            </label>
            <br/>
            <label>Start Time
                <input value={values.class_start_time} onChange={onChange} name='class_start_time' type='time'/>
            </label>
            <br/>
            <input type='submit'></input>
            
        </form>
    )
}

export default AddClass;