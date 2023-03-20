import React from  'react';
import { createElement } from "react";
import BtnCard from "./btncard";
import FeaturedData from "./database/featureddata";

function Featured(){
    return (
        <div className="frequently-searched">
                <h2>Featured Plants</h2>

                <div className="frequent-container" >
                    {FeaturedData.map((eachFeaData)=>  createElement(BtnCard , {eachData : eachFeaData})    )}
                    
                </div>
        </div>
    )
}

export default Featured;