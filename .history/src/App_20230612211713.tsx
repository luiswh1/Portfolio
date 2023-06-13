import React from 'react';
import Home from './Pages/Home';
import ScrollUpButton from './Components/ScrollUpButton/ScrollUpButton';

function App() {
  return (
    <>
    <ScrollUpButton showBelow={ 250 }/>
    <Home />
    </>
  );
}

export default App;
