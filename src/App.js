import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import './App.css'; 
import Banner from './Components/NavBar/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
