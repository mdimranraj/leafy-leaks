import React from 'react';
import SearchBar from './searchbar';
import Card from './card';

const det = {
    plantName: "rose"
}
function PlantDetails(){
    return(<>
        <SearchBar/>

        <div className='plant-detail-container'>
            <div className='plant-detail-box-1'>
                <div className="box-1-card-holder"><Card eachCard={det}/></div>
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
            <div className='plant-detail-box-2'>
                <div className='box-2-part1'>
                    <h3>Description </h3>
                    <div>
                    A specific kind of flowering shrub is the rose. The Latin word Rosa is the source of its name. All roses were originally wild: they grew across North America, Europe, northwest Africa and many regions of Asia and Oceania. There are about 100 different species of roses. Although wild rose species can be produced in gardens, most garden roses are cultivars that have been selected by humans. The stems of most roses have spines. This is a typical plant defensive system.
 Roses can be found in abundance in gardens. They can also be found in vineyards. A rose bush is put at the end of each row of grapes in a large vineyard. The vine growers can tell that their vines are healthy as long as the roses are healthy. 

                    </div>
                </div>
                <div className='box-2-part2'>
                    <h3>Uses and Benefits</h3>
                    <div>
                    Roses have a pleasant smell. The aroma of the rose is produced by microscopic perfume glands on the petals, which may be seen under a strong microscope. Rose petals are sometimes dried and wrapped so that they can be used for decoration or perfume.
Roses can be found in abundance in gardens. They can also be found in vineyards. A rose bush is put at the end of each row of grapes in a large vineyard. The vine growers can tell that their vines are healthy as long as the roses are healthy.

                    </div>
                </div>
                <div className='box-2-part3'>
                    <h3>How to Grow</h3>
                    <div>
                    Put the rose plant in the sun for 3 to 4 hours every morning so that it can grow at the proper period. Provide water to the plant as needed to ensure that there are no problems. This floral plant makes little use of chemical fertilisers or fertilisers.
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default PlantDetails;