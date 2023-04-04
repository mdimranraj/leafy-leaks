import React, { useEffect } from "react";
import {Link, Outlet } from "react-router-dom";
import Featured from "../components/featured";
import { useState } from "react";
function MoreToLess(){
    var curr = document.getElementsByClassName("more-less")[0].innerHTML;
    if(curr === "more..."){
        document.getElementsByClassName("more-less")[0].innerHTML = "less...";
    }
    else document.getElementsByClassName("more-less")[0].innerHTML = "more...";  
    return;
}

function PlantRoom(props) {

    const [currPage,setCurrPage] = useState(props.currState);
   
    return (
        <div className="plantroom-container">
            <div className="category-buttons">
                <div>Categories</div>
            
                <div className="cat-buttons-visible">
                    <Link to="/plantroom/featured"><button type="button" onClick = {()=>{setCurrPage("Featuredd")}} className="btn btn-light cat-but">Featured <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=11HVGRKC7E9mM23yTaynbVmqn9pAVcgZ_"></img></button></Link>
                    <Link to="/plantroom/decoration"><button type="button" onClick = {()=>{setCurrPage("Decorations")}}className="btn btn-light cat-but">Decorative <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1EzbdjMqgKspNGVVqVnR_7XiGJLbJPuuI" alt="cat-img"></img></button> </Link>
                    <Link to="/plantroom/ayurvedic"><button type="button" onClick = {()=>{setCurrPage("Ayurvedic")}} className="btn btn-light cat-but">Ayurvedic <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1Sj50wFWJ8hF8otv2fIgIadSSSUfhkAz7" alt="cat-img"></img></button></Link>
                    <Link to="/plantroom/crops"><button type="button" onClick = {()=>{setCurrPage("Crops")}} className="btn btn-light cat-but">Crops <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1TBNIoGUFug21wMrYBAhvc384E67tySuM" alt="cat-img"></img></button></Link>
                    <Link to="/plantroom/bonsai"><button type="button" onClick = {()=>{setCurrPage("Bonsai")}} className="btn btn-light cat-but">Bonsai <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1cNk5-dBB8UD5Zq_36RMqbcS0AEJLwXU-" alt="cat-img"></img></button></Link>
                    <Link to="/plantroom/vegetables"><button type="button" onClick = {()=>{setCurrPage("Vegetables")}} className="btn btn-light cat-but">Vegetables <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1H9t2oVV7mMAVpSyZdsaB-FKT9SPgcjbb" alt="cat-img"></img></button></Link>
                    
                </div>

                <div className="collapse cat-buttons-hidden" id="collapseExample">
                    <Link to="/plantroom/fruits"><button type="button" onClick = {()=>{setCurrPage("Fruits")}} className="btn btn-light cat-but">Fruits <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=11HVGRKC7E9mM23yTaynbVmqn9pAVcgZ_"></img></button></Link>
                    <Link to="/plantroom/pulses"><button type="button" onClick = {()=>{setCurrPage("Pulses")}} className="btn btn-light cat-but">Pulses <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1ETNvFl5jbMvEGhua1ouuYLT2pOZTqbLk"></img></button></Link>
                    <Link to="/plantroom/trees"><button type="button" onClick = {()=>{setCurrPage("Trees")}} className="btn btn-light cat-but">Trees <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1XiUuQbbXgLcAJyocYZHfL6WEaUH6VJZJ"></img></button></Link>
                    <Link to="/plantroom/herbs"><button type="button" onClick = {()=>{setCurrPage("Herbs")}} className="btn btn-light cat-but">Herbs <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1JmDZ816fKbPfWsvEndf4GzZZh0FRUXsn"></img></button></Link>
                    <Link to="/plantroom/climbers"><button type="button" onClick = {()=>{setCurrPage("Climbers")}} className="btn btn-light cat-but">Climbers <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1RLZXEESykraj62vJ2esvsA0wL6e5CrEs"></img></button></Link>
                    <Link to="/plantroom/creepers"><button type="button" onClick = {()=>{setCurrPage("Creepers")}} className="btn btn-light cat-but">Creepers <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1VDuA1cG6uaOeTdFadT0olE-Iz7Umh1Zw"></img></button></Link>
                </div>
                <a className="more-less" onClick={MoreToLess} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    more...
                </a>
            </div>

            
            {/* <Outlet /> */}
            {/* {(currPage !== "Featured")?<Outlet/>:""} */}
            {(currPage === "Featured")?<Featured/>:<Outlet/>}
           
        </div>
        
    )
}

export default PlantRoom;
