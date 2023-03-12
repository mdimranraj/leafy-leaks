import React from 'react';
import SearchBar from './searchbar';
import Card from './card';

function PlantDetail(){
    return(<>
        <SearchBar/>

        <div className='plant-detail-container'>
            <div className='plant-detail-box-1'>
                <div className="box-1-card-holder"><Card /></div>
                <div className='box-1-title'>
                    <h2>Plant Name</h2>
                    <table>
                        <tr>
                            <td>Scientific Name : </td>
                            <td>hululio peksie</td>
                        </tr>
                        <tr>
                            <td>Family : </td>
                            <td>kjskjidk</td>
                        </tr>
                        <tr>
                            <td>Kingdom : </td>
                            <td>Plantae</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        </>
    );
}

export default PlantDetail;