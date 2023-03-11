import React from 'react';
import Header from './components/Head/Header';
import MainRoute from './Routes/MainRoute';
function App() {
  return (
    <div className="min-h-screen bg-lowWhite text-darkText dark:bg-darkBlue dark:text-white">
      <Header/>
      <MainRoute/>
    </div>
  );
}

export default App;
