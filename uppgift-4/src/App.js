import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [toggleState, setToggleState] = useState(false)

  const handleClick = () => {
    setToggleState(!toggleState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          woaw, a button
        </p>
      </header>
      <div>
        <Button toggleState={toggleState} onClick={handleClick} />
      </div>
    </div>
  );
}

function Button({ toggleState, onClick}) {
  return (
    <button onClick={onClick}>
      {toggleState ? "on" : "off"}
    </button>
  );
}

export default App;
