import React from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './searchbar';
import Card from './card';
import FeaturedData from '../database/featureddata';
import DecorativeData from '../database/decorativedata';
// import { useContext } from 'react';
// import { ScoreContext , UserContext} from './card';

const det = {
    plantName: "rose"
}
function PlantDetails(){
    const { id } = useParams();
    // const card = id < FeaturedData.length ? FeaturedData[id] : DecorativeData[id - FeaturedData.length];
    const cardData = FeaturedData.concat(DecorativeData).filter((card)=> card.id === id)
    const card = cardData[0]; 


    return(<>
        <SearchBar/>

        <div className='plant-detail-container'>
            <div className='plant-detail-box-1'>
                <div className="box-1-card-holder"><Card eachCard={card}/></div>
                
                <div className='box-1-title'>
                    <h2>{card.plantName}</h2>
                    <table>
                        <tr>
                            <td>Scientific Name : </td>
                            <td>{card.scientificDetails.scientificName}</td>
                        </tr>
                        <tr>
                            <td>Family : </td>
                            <td>{card.scientificDetails.family}</td>
                        </tr>
                        <tr>
                            <td>Kingdom : </td>
                            <td>Plantae</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='plant-detail-box-2'>
                <div className='box-2-part1'>
                    <h3>Description </h3>
                    <div>
                    {card.description}
                    </div>
                </div>
                <div className='box-2-part2'>
                    <h3>Uses and Benefits</h3>
                    <div>
                    {card.usesAndBenefits}
                    </div>
                </div>
                <div className='box-2-part3'>
                    <h3>How to Grow</h3>
                    <div>
                    {card.howToGrow}
                    </div>
                </div>
            </div>
        </div>
    
        </>
    );
}

export default PlantDetails;