import React from 'react';
import './App.css';
import { Cell } from './Componenets/Cell/Cell';
import { CoinSlot } from './Componenets/CoinSlot/CoinSlot';
import { Display } from './Componenets/Display/Display';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="w3-container w3-tangerine">
        <p className="w3-jumbo" style={{ margin: 'auto', marginBottom: "10px" }}><u><b>My Vending Machine</b></u></p>
      </div>
      <Cell />
      <div>
        <CoinSlot />
      </div>
      <div>
        <Display />
      </div>
    </div>
  );
}

export default App;
