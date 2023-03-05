import React from 'react';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
function App() {
  return (
    <div className="App">
      <Country cName='Germany'/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
