import React from "react";
import Card from "./card";

function BtnCard(props) {
    return (
        <div>

            <div className="btncard-container">
                <Card eachCard={props.eachData} />
            </div>

        </div>


    );
}
export default BtnCard;
