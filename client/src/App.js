import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage";



// import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;




// import logo from './logo.svg';
//
// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>