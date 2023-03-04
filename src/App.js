import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./components/home";
import Navbar from './components/navbar';
import Footer from './components/footer';
import PlantRoom from './components/plantroom';
import Blogs from './components/blogs';
import Contact from './components/contact';
import MyPlants from './components/myplants';
import AboutUs from './components/about';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/plantroom' element={<PlantRoom/>} />
              <Route path='/blogs' element={<Blogs/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/myplants' element={<MyPlants/>} />
          </Routes>
          <Footer />
          </Router>
      </header>
    </div>
  );
}


export default App;
