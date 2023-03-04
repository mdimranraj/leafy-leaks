
import Home from './components/home';


function App() {
  return (
    
    
    <div className="App">
      
      <header className="App-header">
        
          <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' exact element={<Home />} />
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
import Footer from './components/footer';

export default App;
