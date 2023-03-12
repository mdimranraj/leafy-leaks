import React from 'react';
import Navbar from './navbar';
import Card from './card';
import Quote from './quote';
import Footer from './footer';
import Intro from './intro';
import SearchBar from './searchbar';
import Quotes from './database/quotesdata';
import Carousel from './carousel';


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
           <Intro/>
           <Carousel /> 
           <Quote quote = {q.quote} credit = {q.credit} />
      </div>

    );
}

export default Home;