// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import Header from './Header';
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
    <h2>hello world</h2>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
