import React from 'react';
import logo from './middle_finger.png';
import './App.css';

function App() {
  let state = true
  // const toggleButton = document.querySelector(".toggle")
  // toggleButton.addEventListener("click", changeState)
  
  // function changeState(){
  //   state = !state
  // }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{state}</p>
        <button class="toggle">Toggle state</button>
      </header>
    </div>
  );
}

export default App;
