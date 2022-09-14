import React from 'react'

import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import Home from './components/Home';
import { Route , Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route  path='/'  element={<Main />} /> 
     <Route exact path='/searchpage/:iconName' element={<SearchPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
