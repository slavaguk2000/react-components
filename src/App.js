import './App.css';
import BeforeAfterImage from "./BeforeAfterImage";
import before from './before.jpg';
import after from './after.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeforeAfterImage srcAfter={after} srcBefore={before} height="500px" />
      </header>
    </div>
  );
}

export default App;
