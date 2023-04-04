import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedData from '../database/featureddata';
import DecorativeData from '../database/decorativedata';
// import PlantDetails from './plantdetails';



function Card(props) {

    return (
      <Link to={`/plantdetails/${props.eachCard.id}`}>
      <div className="card card-wrapper" style={{width:'18rem'}}>
        
        <img src={props.eachCard.imgURL} className="card-img-top" alt="..."></img>
        <div className="inner-div">
              <div className="card-body">
                <p className="card-text">{props.eachCard.plantName}</p>
              </div>
        </div>
 
      </div>
      </Link>
    );
}


export default Card;
