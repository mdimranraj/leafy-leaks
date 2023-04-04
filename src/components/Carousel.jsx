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
                {/* <a href="\plantdetails"> <Card eachCard={FeaturedData[0]}/> </a> */}
                <Link to={`/plantdetails/${FeaturedData[0].id}`}>
                    <Card eachCard={FeaturedData[0]}/>
                </Link>
            
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={FeaturedData[1]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[1].id}`}>
                    <Card eachCard={FeaturedData[1]}/>
                </Link>
                
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={FeaturedData[2]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[2].id}`}>
                    <Card eachCard={FeaturedData[2]}/>
                </Link>
                
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={FeaturedData[3]}/>  </a> */}
            <Link to={`/plantdetails/${FeaturedData[3].id}`}>
                    <Card eachCard={FeaturedData[3]}/>
                </Link>
               
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={FeaturedData[4]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[4].id}`}>
                    <Card eachCard={FeaturedData[4]}/>
                </Link>
                
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[3].id}`}>
                    <Card eachCard={FeaturedData[3]}/>
                </Link>
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[2].id}`}>
                    <Card eachCard={FeaturedData[2]}/>
                </Link>
               
            </div>
            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[1].id}`}>
                    <Card eachCard={FeaturedData[1]}/>
                </Link>
               
            </div>

            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[0].id}`}>
                    <Card eachCard={FeaturedData[0]}/>
                </Link>
               
            </div>

            <div class="slide">
            {/* <a href="\plantdetails"> <Card eachCard={DecorativeData[0]}/> </a> */}
            <Link to={`/plantdetails/${FeaturedData[3].id}`}>
                    <Card eachCard={FeaturedData[3]}/>
                </Link>
                
            </div>
            
        </div>
    </div>



    );
}

export default Carousel;