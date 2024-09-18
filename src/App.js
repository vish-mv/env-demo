import React, { useEffect } from 'react';

function App() {
  // Access the environment variable
  const testEnvVar = process.env.REACT_APP_TEST;

  // Print the variable to the console
  useEffect(() => {
    console.log("Environment Variable TEST:", testEnvVar);
  }, [testEnvVar]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{testEnvVar}</h1>
      </header>
    </div>
  );
}

export default App;
