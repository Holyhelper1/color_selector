import React from 'react';
import './App.css';
import { MainLayers } from './Components/Color-chooser/Components/main-layers/main-layers';
import { CountingCall } from './Components/Color-chooser/Components/Counting-call/сounting-call';

function App() {
  return (
    <div  className="App">
      <MainLayers />
      <CountingCall />
    </div>
  );
}

export default App;
