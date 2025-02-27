import React from 'react';
<<<<<<< HEAD
import Navbar from './components/navbar/Navbar';
import './App.css';
import Header from './components/header/Header';
import AboutPage from './components/test/AboutPage';
=======
import '@coreui/coreui/dist/css/coreui.min.css';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Header from './components/header/Header';
import Part from './components/Partners/Part';
import AboutATIA from './components/aboutATIA/AboutATIA';
import Bureau from './components/bureau/Bureau'
import Events from './components/events/Events'
import Footer from './components/footer/Footer'
>>>>>>> 4eabc10 (J'ai complété tous le components de projet)

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
<<<<<<< HEAD
      <AboutPage />
=======
      <Part />
      <AboutATIA/>
      <Bureau/>
      <Events/>
      <Footer/>
>>>>>>> 4eabc10 (J'ai complété tous le components de projet)
    </div>
  );
};

export default App;