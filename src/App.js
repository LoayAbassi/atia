import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Footer from './components/footer/Footer';
import Form from './components/form/Form.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './components/HomePage/home.js';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/adh" element={<Form />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
