import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import React from 'react';
import { ImageData } from "./components/onBoardImages";
import styled from "styled-components";

import ClassList from "./components/classList";
import Login  from "./components/login";
import Logout from "./components/logout";
import Signup from "./components/signup";
import AddClass from "./components/AddClass";
import HomePage from "./components/homePage";
import Onboarding from "./components/onBoarding";


function App() {
  return (
    <Router>
    <div className="App">

      <header className="App-header">
        <h1>Anywhere Fitness!</h1>
        <NavStyle>
          <ul>
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/signup'>signup</Link></li>
            {localStorage.getItem('token') !=null ?
            <li><Link to='/homepage'>home</Link></li>:
            <li><Link to='/classList'>home</Link></li>}
            <li><Link to='/logout'>logout</Link></li>
          </ul>
        </NavStyle>
      </header>

        <Switch>
          {/*place your component below this. remove before pushing*/}
          <Route exact path ='/'>
            <ClassList/>
          </Route>
          <Route path='/classList'> 
            <ClassList/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='/addclass'>
            <AddClass/>
          </Route>
          <Route path='/homepage'>
            <HomePage/>
          </Route>
          <Route path='/onboarding'>
            <Onboarding slides={ImageData}/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

const NavStyle = styled.nav`
  display:flex;
  flex-direction: row-reverse;
  ul{
    li{
      margin-right:5px;
      display:inline-block;
    }
  }
`