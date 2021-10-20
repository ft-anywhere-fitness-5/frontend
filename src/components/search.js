import React from "react";

const Search = () => {
    const handleSubmit=(e)=> {
        e.preventDefault();
    }
    return(
        // <div>
        //     <h3>Search By</h3>
        //     <label>name
        //         <input type='radio' name='search' value='class_name'/>
        //     </label>

        // </div>
        <form className='searchArea' onSubmit={handleSubmit}>
            <h3>Search By</h3>
            <label>Name
            <input type='radio' name='search' value='class_name'/>
            </label>
            <label>Type
            <input type='radio' name='search' value='class_type'/>
            </label>
            <label>Start Time
            <input type='radio' name='search' value='class_start_time'/>
            </label>
            <label>Duration
            <input type='radio' name='search' value='class_duration'/>
            </label>
            <label>Intensity
            <input type='radio' name='search' value='class_intensity'/>
            </label>
            <label>Location
            <input type='radio' name='search' value='class_location'/>
            </label>
            <label>Open
            <input type='radio' name='search' value='class_registered_attendees'/>
            </label>
            <label>Class Size
            <input type='radio' name='search' value='class_max_size'/>
            </label>
            <input type='text'placeholder='search' />
        </form>
        
    )
}

export default Search;