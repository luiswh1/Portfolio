import React from 'react';
import Home from './Pages/Home';
import ScrollUpButton from './Components/ScrollUpButton/ScrollUpButton';

function App() {
  return (
    <div>
      <Home />
      <ScrollUpButton showBelow={ 250 }/>
    </div>
  );
}

export default App;
