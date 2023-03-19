import React from 'react';

function Card(props) {

    return (
      <div className="card card-wrapper" style={{width:'18rem'}}>
        <img src='https://drive.google.com/uc?export=download&id=17j-WEWI0malzKtj5Ep4AKzp0KjBTYkDB' className="card-img-top" alt="..."></img>
        <div className="inner-div">
              <div className="card-body">
                <p className="card-text">{props.eachCard.plantName}</p>
              </div>
        </div>
 
      </div>
    );
}

export default Card;