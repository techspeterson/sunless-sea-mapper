import React from 'react';
import './App.css';

import TileContainer from "./TileContainer"

function App() {
  const renderMapTiles = () => {
    const n = [1, 2, 3, 4];
    const w = [7, 8, 13, 14, 19, 20];
    const ne = [9, 10, 15, 16, 21];
    const e = [11, 17, 23, 29];
    const s = [22, 25, 26, 27, 28];

    return [...Array(36)].map((box, index) => {
      let key;
      if (n.includes(index)) {
        key = "n";
      }
      else if (w.includes(index)) {
        key = "w";
      }
      else if (ne.includes(index)) {
        key = "ne";
      }
      else if (e.includes(index)) {
        key = "e";
      }
      else if (s.includes(index)) {
        key = "s";
      }
      else {
        key = "f";
      }
      return <TileContainer key={index} index={index} type={key} />
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        Sunless Sea Mapper
      </header>
      <div className="map">
        {renderMapTiles()}
      </div>
    </div>
  );
}

export default App;
