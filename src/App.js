import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home";
import Navbar from './components/navbar';
import Footer from './components/footer';
import PlantRoom from './pages/plantroom';
import Blogs from './pages/blogs';
import Contact from './components/contact';
import MyPlants from './components/myplants';
import AboutUs from './pages/about';
import PlantDetails from './components/plantdetails';
import Decoration from './components/decoration';
import Featured from './components/featured';
import Register from './pages/register';
import Login from './pages/login';
import NotFound from './components/notfound';


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
                <Route path='ayurvedic' element={<NotFound/>} />
                <Route path='crops' element={<NotFound/>} />
                <Route path='bonsai' element={<NotFound/>} />
                <Route path='vegetables' element={<NotFound/>} />
                <Route path='fruits' element={<NotFound/>} />
                <Route path='pulses' element={<NotFound/>} />
                <Route path='trees' element={<NotFound/>} />
                <Route path='herbs' element={<NotFound/>} />
                <Route path='climbers' element={<NotFound/>} />
                <Route path='creepers' element={<NotFound/>} />
                <Route path='*' element={<NotFound/>} />
              </Route>  
              <Route path='/blogs' element={<Blogs/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/plantdetails/:id' element={<PlantDetails/>} />
          </Routes>
          <Footer />
          </Router>
      </header>
    </div>
  );
}


export default App;
