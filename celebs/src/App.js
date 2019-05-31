import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="Container">
              <div className="Header">Celebrity Birthdays</div>
              <input className="InputBox" type="text" placeholder="Enter Your Birthday Here (MM/DD/YY)"></input>
              <div>
                  <button className="SearchButton">Search</button>
              </div>
            </div>
        </div>
      );
    }

export default App;
