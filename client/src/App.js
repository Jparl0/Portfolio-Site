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