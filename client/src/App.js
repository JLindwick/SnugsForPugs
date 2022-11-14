import React from 'react'
import {Routes, Route } from 'react-router-dom';
// import Main from './views/Main';
// import Update from './views/Update'
// import New from './views/New'
import Main from './views/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route element = {<Main />} path="/" />

    </Routes>
  </div>
  );
}

export default App;