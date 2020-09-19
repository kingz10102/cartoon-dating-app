import React from 'react';
import './App.css';
import Heading from './components/Heading';
import ImageCards from './components/ImageCards';


function App() {
  return (
    <div className="app">
      {/* Heading */}
      <Heading/>
      <ImageCards/>
    </div>
  );
}

export default App;
