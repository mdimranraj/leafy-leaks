import React from  'react';
import { createElement } from "react";
import BtnCard from "./btncard";
import DecorativeData from "../database/decorativedata";

function Decoration(){
    return (
        <div className="frequently-searched">
                <h2>Decorative Plants</h2>

                <div className="frequent-container" >
                    {DecorativeData.map((eachDecData)=>  createElement(BtnCard , {eachData : eachDecData})    )}
                    
                </div>
        </div>
    )
}

export default Decoration;