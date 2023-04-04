import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';
import FeaturedData from '../database/featureddata';
import DecorativeData from '../database/decorativedata';

function Carousel(){
    return (

        <div class="slider">
        <div class="slide-track">
            
            <div class="slide">
                    <Card eachCard={FeaturedData[0]}/>
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[1]}/>   
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[2]}/>              
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[3]}/>
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[4]}/>  
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[3]}/>
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[2]}/>         
            </div>
            <div class="slide">
                    <Card eachCard={FeaturedData[1]}/>
            </div>

            <div class="slide">
                    <Card eachCard={FeaturedData[0]}/>
            </div>

            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
                    <Card eachCard={FeaturedData[3]}/>
            </div>
            
        </div>
    </div>



    );
}

export default Carousel;