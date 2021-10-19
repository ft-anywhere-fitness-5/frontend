import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getClasses } from "../actions";
import Class from './class';

const ClassList = (props) => {
    useEffect(()=>{
        props.getClasses()
    },[])

    useEffect(()=>{
        console.log(props.classes)
    },[props.classes])


    return(
      <div>
        {props.classes && props.classes.map(classItem => {
          return <Class key={classItem.id} classItem={classItem}/>
        })}
      </div>
    )
}

const mapStateToProps= state => ({
    classes: state.classes
})

export default connect(mapStateToProps,{getClasses})(ClassList) 
