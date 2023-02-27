import React from 'react';
import Navbar from './navbar';
import Card from './card';
import Quote from './quote';
import Footer from './footer';

function Home() {
    return (
        <div>
           <Navbar/>
           <Card/>
           <Quote/>
           <Footer/>
      </div>

    );
}

export default Home;