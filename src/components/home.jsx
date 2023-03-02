import React from 'react';
import Navbar from './navbar';
import Card from './card';
import Quote from './quote';
import Footer from './footer';
import Intro from './Intro';

function Home() {
    return (
        <div>
           <Navbar/>
           <Intro/>
           <div className='cards-carousel-div' style={{display:"flex"}}>
            <Card/>
            <Card/>
            <Card style={{width:'25rem',height:'40rem'}}/>
            
           </div> 
           <Quote/>
           <Footer/>
      </div>

    );
}

export default Home;