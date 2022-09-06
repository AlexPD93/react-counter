import React, { useState } from "react";
import "./App.css";

function App() {
  const [increment, setIncrement] = useState(0);

  function increase() {
    setIncrement(increment + 1);
  }

  function decrease() {
    setIncrement(increment - 1);
  }

  return (
    <div className="App">
      <button className="counter" onClick={increase}>
        +
      </button>
      <button className="counter" onClick={decrease}>
        -
      </button>
      <h1>{increment}</h1>
    </div>
  );
}

export default App;
