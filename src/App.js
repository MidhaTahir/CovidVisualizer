import React from 'react';
import './App.css';
import Pic from "./assets/covid.png"
import { Visual, ChartPie, Selector } from "./components";
import ContextProvider from './Context';

function App() {
  
  return (
    <ContextProvider>
      <div className="App">
        <h1>Global C<img src={Pic} height="40" alt="o"/>vid Visualizer</h1>
        <Visual />
        <ChartPie />
        <Selector />
      </div>
    </ContextProvider>
  );
}

export default App;
