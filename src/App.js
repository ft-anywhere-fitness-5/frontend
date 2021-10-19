import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import ClassList from "./components/classList";

function App() {
  return (
    <Router>
    <div className="App">

      <header className="App-header">
        <h1>Anywhere Fitness!</h1>
        <nav>
          <ul>
            <li>login</li>
            <li>signup</li>
            <li>home</li>
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
        </Switch>
    </div>
    </Router>
  );
}

export default App;
