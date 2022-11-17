import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Main from './views/Main'
import Adopt from './views/Adopt';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route element = {<Main />} path="/" />
    <Route element = {<Adopt />} path="/adopt" />
    </Routes>
  </div>
  );
}

export default App;