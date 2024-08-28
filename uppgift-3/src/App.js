import './App.css';
import React, { useState, useEffect } from 'react';

var link = "https://official-joke-api.appspot.com/random_joke"

function App() {

  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch(link).then(response => response.json()).then(data => setJoke(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      {joke ? (
          <>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </>
        ) : (
          <p>Loading joke...</p>
        )}
      </header>
    </div>
  );
}

export default App;
