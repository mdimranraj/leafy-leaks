import React from 'react';

function Quote(props) {
    return (
      <div className="quote-container">
        <img className="quote-open" src="https://drive.google.com/uc?export=download&id=1ao5VQdtoX3kJ7X9Q5owM1Jhn10mdpy5p" alt="quote-open"></img>
        <div className="quote-text">
            <p className="quote">
                {props.quote}
            </p>
            <p className="credit">
                 {props.credit}
            </p>
        </div>
        <img className="quote-close" src="https://drive.google.com/uc?export=download&id=1flEyndEzPs--MFFCFGq94HdueUzrR5fa" alt="quote-close"></img>
      </div>
    );
}

export default Quote;