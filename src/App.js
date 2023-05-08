import './App.css';
import BeforeAfterImage from "./BeforeAfterImage";
import before from './before.jpg';
import after from './after.jpg';
import PaintbrushLoader from "./PaintbrushLoader";
import {Box} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeforeAfterImage srcAfter={after} srcBefore={before} height="500px" />
          <Box width={200} height={200}>
            <PaintbrushLoader width={10} backgroundColor="blue" />
          </Box>
      </header>
    </div>
  );
}

export default App;
