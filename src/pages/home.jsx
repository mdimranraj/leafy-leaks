import React from 'react';
import Quote from '../components/quote';
import Intro from '../components/Intro';
import Quotes from '../database/quotesdata';
import Carousel from '../components/Carousel';


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