import React from 'react';
import Card from './card';
import DecorativeData from './database/decorative';

function Carousel(){
    return (

        <div class="slider">
        <div class="slide-track">
            
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
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/>  </a>
               
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

            <div class="slide">
            <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a>
                
            </div>
            
        </div>
    </div>



    );
}

export default Carousel;