import React from 'react';
// import PlantDetails from './plantdetails';

function Card(props) {

    return (
      <div className="card card-wrapper" style={{width:'18rem'}}>
        
        <img src={props.eachCard.imgURL} className="card-img-top" alt="..."></img>
        <div className="inner-div">
              <div className="card-body">
                <p className="card-text">{props.eachCard.plantName}</p>
              </div>
        </div>

        {/* <UserContext.Provider value={'Imran'}>
        <ScoreContext.Provider value={89}>
          <PlantDetails />
        </ScoreContext.Provider>
      </UserContext.Provider> */}
 
      </div>
    );
}


export default Card;
// export const ScoreContext = React.createContext();
// export const UserContext = React.createContext();