import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="App">
      <label>
      <input value={username} onChange={handleInputChange} />
      </label>

      <p> { username ? `Hello, ${username}!`  : "please enter your name" }</p>
    </div>
  );
}


export default App;
