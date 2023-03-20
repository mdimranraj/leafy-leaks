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
import PlantDetails from './components/plantdetails';
import Decoration from './components/decoration';
import Featured from './components/featured';


function App() {
  let str  = "Featured";
  return (
    <div className="App">
      <header className="App-header">
          
          <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/plantroom' element={<PlantRoom currState={str}/>}>
                <Route path='decoration' element={<Decoration/>} />
                <Route path='featured' element={<Featured/>} />
              </Route>  
              <Route path='/blogs' element={<Blogs/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/myplants' element={<MyPlants/>} />
              <Route path='/plantdetails' element={<PlantDetails/>} />
          </Routes>
          <Footer />
          </Router>
      </header>
    </div>
  );
}


export default App;
