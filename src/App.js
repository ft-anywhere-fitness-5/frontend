import logo from './logo.svg';
import './App.css';
import Class from './components/class';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/*place your component below this. remove before pushing*/}
      <Class />
      </header>
    </div>
  );
}

export default App;
