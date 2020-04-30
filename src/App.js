import React from 'react';
import './App.css';

import MapSegmentContainer from "./MapSegmentContainer"

function App() {
  const renderMapContainer = () => {
    return [...Array(36)].map((elem, index) => {
      return <MapSegmentContainer key={index} />
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        Sunless Sea Mapper
      </header>
      <div className="map">
        {renderMapContainer()}
      </div>
    </div>
  );
}

export default App;
