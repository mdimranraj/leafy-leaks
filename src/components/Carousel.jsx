import React from 'react';
import Card from './card';
import FeaturedData from './database/featureddata';
import DecorativeData from './database/decorativedata';

function Carousel(){
    return (

        <div class="slider">
        <div class="slide-track">
            
            <div class="slide">
                <a href="\plantdetails"> <Card eachCard={FeaturedData[0]}/> </a>
            
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={FeaturedData[1]}/> </a>
                
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={FeaturedData[2]}/> </a>
                
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={FeaturedData[3]}/>  </a>
               
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={FeaturedData[4]}/> </a>
                
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a>
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a>
               
            </div>
            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a>
               
            </div>

            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a>
               
            </div>

            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a>
                
            </div>
            
        </div>
    </div>



    );
}

export default Carousel;