import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getClasses } from "../actions";
import Class from './class';

const ClassList = (props) => {

    useEffect(()=>{
        props.getClasses();
    },[]) //eslint-disable-line


    return(
      <div>
        <h3>Classes</h3>
        <div className='classlist'>
          {props.classes && props.classes.map(classItem => {
            return <Class key={classItem.class_id} classItem={classItem}/>
          })}
        </div>
      </div>
    )
}

const mapStateToProps= state => ({
    classes: state.classes
})

export default connect(mapStateToProps,{getClasses})(ClassList) 
