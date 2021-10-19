import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getClasses } from "../actions";

const ClassList = (props) => {
    useEffect(()=>{
        props.getClasses()
    },[])

    useEffect(()=>{
        console.log(props.classes)
    },[props.classes])

    return(
        <></>
    )
}

const mapStateToProps= state => ({
    classes: state.classes
})

export default connect(mapStateToProps,{getClasses})(ClassList) 