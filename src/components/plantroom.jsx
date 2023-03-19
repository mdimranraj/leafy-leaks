import React from "react";
import { createElement } from "react";
import BtnCard from "./btncard";
import DecorativeData from "./database/decorative";

// function createCards(props){
        
//     return createElement(BtnCard , {eachData : props.eachData});
    
// }

function PlantRoom() {

    return (
        <div className="plantroom-container">
            <div className="category-buttons">
                <div>Categories</div>
            
                <div className="cat-buttons-visible">
                    <button type="button" class="btn btn-light cat-but">Decorative <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1EzbdjMqgKspNGVVqVnR_7XiGJLbJPuuI" alt="cat-img"></img></button>
                    <button type="button" class="btn btn-light cat-but">Ayurvedic <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1Sj50wFWJ8hF8otv2fIgIadSSSUfhkAz7" alt="cat-img"></img></button>
                    <button type="button" class="btn btn-light cat-but">Crops <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1TBNIoGUFug21wMrYBAhvc384E67tySuM" alt="cat-img"></img></button>
                    <button type="button" class="btn btn-light cat-but">Bonsai <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1cNk5-dBB8UD5Zq_36RMqbcS0AEJLwXU-" alt="cat-img"></img></button>
                    <button type="button" class="btn btn-light cat-but">Vegetables <img className="cat-img" src="https://drive.google.com/uc?export=download&id=1H9t2oVV7mMAVpSyZdsaB-FKT9SPgcjbb" alt="cat-img"></img></button>
                    <button type="button" class="btn btn-light cat-but">Fruits <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=11HVGRKC7E9mM23yTaynbVmqn9pAVcgZ_"></img></button>
                </div>

                <div class="collapse cat-buttons-hidden" id="collapseExample">
                    <button type="button" class="btn btn-light cat-but">Pulses <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1ETNvFl5jbMvEGhua1ouuYLT2pOZTqbLk"></img></button>
                    <button type="button" class="btn btn-light cat-but">Trees <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1XiUuQbbXgLcAJyocYZHfL6WEaUH6VJZJ"></img></button>
                    <button type="button" class="btn btn-light cat-but">Herbs <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1JmDZ816fKbPfWsvEndf4GzZZh0FRUXsn"></img></button>
                    <button type="button" class="btn btn-light cat-but">Climbers <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1RLZXEESykraj62vJ2esvsA0wL6e5CrEs"></img></button>
                    <button type="button" class="btn btn-light cat-but">Creepers <img className="cat-img" alt="cat-img" src="https://drive.google.com/uc?export=download&id=1VDuA1cG6uaOeTdFadT0olE-Iz7Umh1Zw"></img></button>
                </div>
                <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    more...
                </a>
            </div>

            <div className="frequently-searched">
                <h2>Frequently Searched</h2>

                <div className="frequent-container" >
                    {DecorativeData.map((eachDecData)=>  createElement(BtnCard , {eachData : eachDecData})    )}
                    
                </div>
            </div>

        </div>
    )
}

export default PlantRoom;
