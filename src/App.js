import React from 'react';
import './App.css';
import Heading from './components/Heading';
import ImageCards from './components/ImageCards';
import AppButtons from './components/AppButtons';


function App() {
  return (
    <div className="app">
      {/* Heading */}
      <Heading/>
      <ImageCards/>
      <AppButtons/>
    </div>
  );
}

export default App;
