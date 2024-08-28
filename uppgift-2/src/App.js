import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounterChange = (change) => {
    setCounter(counter + change);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter: {counter}
        </p>
      </header>
      <div>
        <Button countChange={-1} onClick={() => handleCounterChange(-1)} />
        <Button countChange={+1} onClick={() => handleCounterChange(1)} />
      </div>
    </div>
  );
}

function Button({ countChange, onClick }) {
  return (
    <button onClick={onClick}>
      {countChange}
    </button>
  );
}

export default App;
