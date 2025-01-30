import React, { useState, useEffect } from 'react';

function App() {
  // State for the counter value
  const [counter, setCounter] = useState(0);

  // useEffect hook to update the document title whenever the counter changes
  useEffect(() => {
    document.title = `Count: ${counter}`;
  }, [counter]); // Only rerun this effect if the counter value changes

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Current Count: {counter}</p>
      <div>
       
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
       
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

