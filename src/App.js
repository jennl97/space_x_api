import React from 'react';
import SpaceXLogo from './logo/SpaceXLogo.png';
import './App.css';

//import Launches component
import Launches from './components/Launches';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={SpaceXLogo} className="App-logo" alt="logo" />
        <p>
          Click the button for SpaceX launch details.
        </p>
      </header>
      <div>
        <Launches />
      </div>
    </div>
  );
}

export default App;
