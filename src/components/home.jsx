import React from 'react';
import Navbar from './navbar';
import Card from './card';
import Quote from './quote';
import Footer from './footer';
import Intro from './Intro';
import SearchBar from './searchbar';
import Quotes from './database/quotesdata';


var q = quoteGenerator();
function quoteGenerator(){
    const date = new Date();
    const minute = date.getMinutes();
    const quotesSize = Quotes.length;
    let i = minute%quotesSize;
    return q = Quotes[i];
}

function Home() {

    return (
        <div>
           <Navbar/>
           <SearchBar/>
           <Intro/>
           <div className='cards-carousel-div' style={{display:"flex"}}>
            <Card/>
            <Card/>
            <Card style={{width:'25rem',height:'40rem'}}/>
            
           </div> 
            
           <Quote quote = {q.quote} credit = {q.credit} />
           <Footer/>
      </div>

    );
}

export default Home;