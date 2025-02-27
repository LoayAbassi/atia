import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Part from './components/Partners/Part';
import AboutATIA from './components/aboutATIA/AboutATIA';
import Bureau from './components/bureau/Bureau';
import Events from './components/events/Events';
import Footer from './components/footer/Footer';
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Part />
      <AboutATIA />
      <Bureau />
      <Events />
      <Footer />
    </div>
  );
};

export default App;
