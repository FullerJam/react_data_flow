import React from 'react';
import './App.css';
import DaysCompleted from './components/DaysCompleted'

function App() {
  

  return (
    <div className="App">

      <DaysCompleted days={15}/>
     
    </div>
  );
}

export default App;
