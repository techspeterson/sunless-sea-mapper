import React from 'react';
import { Provider } from "react-redux";
import './App.css';

import store from "./store";
import Container from "./Container"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          Sunless Sea Mapper
        </header>
        <Container />
      </div>
    </Provider>
  );
}

export default App;
