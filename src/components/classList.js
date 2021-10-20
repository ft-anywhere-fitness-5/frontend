import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getClasses } from "../actions";
import Class from './class';
import styled from "styled-components";
import Search from "./search";

const ClassList = (props) => {

    useEffect(()=>{
        props.getClasses();
    },[]) //eslint-disable-line


    return(
      <StyledClass>
        <h3>Classes</h3>
        {props.classes && <Search/>}
        <div className='classlist'>
          {props.classes && props.classes.map(classItem => {
            return <Class key={classItem.class_id} classItem={classItem}/>
          })}
        </div>
      </StyledClass>
    )
}

const mapStateToProps= state => ({
    classes: state.classes
})

export default connect(mapStateToProps,{getClasses})(ClassList) 

const StyledClass = styled.div`
  border: 1px solid gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  .classlist{
    background: black;
    width:35%;
  }
  h2 {
    display:flex;
    font-size: 200%;
    color: gold;
    justify-content:center;
    margin-bottom: 4rem;
  }
  p {
    display: flex;
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    background: gold;
    justify-content: center;
    margin-left: 5rem;
    width: 75%;
    height: 2.3rem;
  }
  p:hover {
    background: white;
    transform: scale(1.04);
  }
`
