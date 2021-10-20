import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import React from 'react';

import ClassList from "./components/classList";
import Login  from "./components/login";
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
        <nav>
          <ul>
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/signup'>signup</Link></li>
            <li><Link to='/classList'>home</Link></li>
          </ul>
        </nav>
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
            <Onboarding/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
