
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// src/index.js or src/App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/layout/Header';
import Home from './components/Home/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';
import Documents from './components/Documents.jsx';
import Facilities from './components/Facilities.jsx'


function App() {
  return (
    <div className="App">
   <Router>
      <ScrollToTop />
        <Header />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
   <Route path="/gallery" element={<Gallery />} /> 
      <Route path="/facilities" element={< Facilities/>} /> 
       <Route path="/docs" element={< Documents/>} /> 
        </Routes>
      
        <Footer />
      </Router>
    </div>
  );
}

export default App;
