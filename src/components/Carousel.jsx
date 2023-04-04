import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';
import FeaturedData from '../database/featureddata';
import DecorativeData from '../database/decorativedata';

function Carousel(){
    return (

        <div className="slider">
        <div className="slide-track">
            
            <div className="slide">
                    <Card eachCard={FeaturedData[0]}/>
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[1]}/>   
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[2]}/>              
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[3]}/>
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[4]}/>  
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[3]}/>
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[2]}/>         
            </div>
            <div className="slide">
                    <Card eachCard={FeaturedData[1]}/>
            </div>

            <div className="slide">
                    <Card eachCard={FeaturedData[0]}/>
            </div>

            <div className="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
                    <Card eachCard={FeaturedData[3]}/>
            </div>
            
        </div>
    </div>



    );
}

export default Carousel;