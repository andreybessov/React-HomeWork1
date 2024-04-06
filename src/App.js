import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassesComponent from './ClassesComponent'

function App() {
  const number = 1
  return (
    <div className="App">
      <header className="App-header">
        {number === 1 ? <FunctionComponent /> : <ClassesComponent/>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
