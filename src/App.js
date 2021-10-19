import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";
import React from 'react';
import ClassList from "./components/classList";
import Login  from "./components/login";

function App() {
  return (
    <Router>
    <div className="App">

      <header className="App-header">
        <h1>Anywhere Fitness!</h1>
        <nav>
          <ul>
            <Link to='/login'>login</Link>
            <li>signup</li>
            <Link to='/classList'>home</Link>
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
        </Switch>
    </div>
    </Router>
  );
}

export default App;
