import React from 'react';
import Home from './pages/Home/Home';
import Country from './components/Country/Country';
import Header from './components/Head/Header';
import { BrowserRouter, Routes } from "react-router-dom";
import MainRoute from './Routes/MainRoute';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainRoute/>
    </div>
  );
}

export default App;
