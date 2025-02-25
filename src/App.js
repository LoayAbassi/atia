import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Header from './components/header/Header';
import AboutPage from './components/test/AboutPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutPage />
    </div>
  );
};

export default App;