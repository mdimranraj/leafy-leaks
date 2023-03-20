import React from 'react';

function Card(props) {

    return (
      <div className="card card-wrapper" style={{width:'18rem'}}>
        {/* <img src='https://drive.google.com/uc?export=download&id=17j-WEWI0malzKtj5Ep4AKzp0KjBTYkDB' className="card-img-top" alt="..."></img> */}
        <img src='https://drive.google.com/uc?export=download&id=1_BA3xmhW5BCu1kOSu0fDBKtQ7qzlUt9r' className="card-img-top" alt="..."></img>
        <div className="inner-div">
              <div className="card-body">
                <p className="card-text">{props.eachCard.plantName}</p>
              </div>
        </div>
 
      </div>
    );
}
// https://drive.google.com/uc?export=download&id=17GYy0sW5Pq5qZP5MqM61RYMPtDj9i8Fk
// https://drive.google.com/uc?export=download&id=1_BA3xmhW5BCu1kOSu0fDBKtQ7qzlUt9r

export default Card;