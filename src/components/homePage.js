import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteClass, getReserved } from '../actions';
import Class from './class';

const Home=(props)=>{

    useEffect(()=>{
      props.getReserved();
    },[])//eslint-disable-line

    function openNav() {
        document.getElementById('mySidebar').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
      }
      
      function closeNav() {
        document.getElementById('mySidebar').style.width = '0';
        document.getElementById('main').style.marginLeft = '0px';
      }
      console.log(props.reserved)
    return (
        <StyledHome>
          <div className='user-section'>
            <div className='welcomeMessage'>

              <h1>Welcome {props.username}</h1>

            </div>

            <div id='main'>
              <button className='openbtn' onClick={openNav}>&#9776; Open</button>
            </div>
            <div id='mySidebar' className='sidepanel'>
              <a href='/homePage' className='closebtn' onClick={closeNav}>&times; Close</a>
              <a href='/classList'>Classes</a>
              <a href='/logout'>Logout</a>
            </div>

            <div className='classlist'>
              {props.reserved && props.reserved.map(item => {
              return <Class key={item.class_id} deleteClass={deleteClass} classItem={item}/>
              })}
            </div>


          </div>
        </StyledHome>
    )
}

const mapStateToProps= (state) => ({
  username: state.username,
  reserved: state.reserved
})
export default connect(mapStateToProps,{deleteClass, getReserved})(Home)

const StyledHome = styled.div`
  width: 99.92%;
  height: 100%;
  display: flex;
  position: static;
  background-color: #f44f4f;

  .user-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  h1 {
  margin-left:50rem;
  color: gold;
  }

  .sidepanel {
    align-self: flex-start;
    height: 250px;
    width: 0;
    position: fixed;
    z-index: 1;
    background-color: #4f4f4f;
    overflow-x: hidden;
    padding-top: 6rem;
    transition: 0.5s; 
  }

  .sidepanel a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: gold;
    display: block;
    transition: 0.3s;
  }

  .sidepanel a:hover {
  color: #f1f1f1;
  }

  .sidepanel .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
  }
  #main{
    align-self: flex-start;
    position: fixed;
  }
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #4f4f4f;
    color: gold;
    padding: 10px 15px;
    border: none;
    position: static;
    align-self:flex-start;
  }

  .openbtn:hover {
    background-color: #444;
    color: white;
  }

  .classlist {
    position: static;
    align-self: center;
  }
`