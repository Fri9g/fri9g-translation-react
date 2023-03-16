import React from 'react'
import { FLC, FLT } from 'fri9g-translation-react';
const FTR = require('./assets/FTR.json')

function App() {
  const FLCV = {
    "lang":"en",
    FTR
  }
  return (
    <FLC.Provider value={FLCV}>
      <h1>FRI9G TRANSLATION</h1>
      <h1>result: "<FLT FLK="test"/>" | key: "test"</h1>
      <h1>result: "<FLT FLK="test2"/>" | key: "test2"</h1>
      <h1>result: "<FLT FLK="testo.test"/>" | key: "testo.test"</h1>
      <h1>result: "<FLT FLK="testo.test2"/>" | key: "testo.test2"</h1>
      <h2>Translation object:</h2>
      <p>{JSON.stringify(FTR)}</p>
    </FLC.Provider>
  );
}

export default App
