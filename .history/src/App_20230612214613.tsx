import React from 'react';
import Home from './Pages/Home';
import ScrollUpButton from './Components/ScrollUpButton/ScrollUpButton';

function App() {
  return (
    <>
    <Home />
    <ScrollUpButton showBelow={ 250 }/>
    </>
  );
}

export default App;
