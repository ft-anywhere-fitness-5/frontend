import React from 'react';
import styled from 'styled-components';


export default function Home() {

    function openNav() {
        document.getElementById('mySidebar').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
      }
      
      function closeNav() {
        document.getElementById('mySidebar').style.width = '0';
        document.getElementById('main').style.marginLeft = '0px';
      }

    return (
        <StyledHome>
            <div className='user-section'>
                
                <div id='mySidebar' class='sidepanel'>
                    <a href='/home' class='closebtn' onclick={closeNav()}>&times; Close</a>
                    <a href='/classList'>Classes</a>
                </div>

                <div id='main'>
                  <button class='openbtn' onclick={openNav()}>&#9776; Open</button>
                  <a href='/classList'>Classes</a>
                </div>
            </div>
        </StyledHome>
    )
}

const StyledHome = styled.div`
width: 99.92%;
height: 150vh;
border: 1px solid black;
display: flex;
position: absolute;
}

.sidepanel {
  height: 250px;
  width: 0;
  position: fixed;
  z-index: 1;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 6rem;
  transition: 0.5s; 
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
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

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}
`