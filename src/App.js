import React, { useEffect } from 'react'
import './App.css';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Profiles from './Profiles.js';


function App() {  
  useEffect(() => {
    document.title = "Apoorva | Portfolio"
  }, [])
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Profiles />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;