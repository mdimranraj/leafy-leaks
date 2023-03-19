import React from "react";
import Card from "./card";

function BtnCard(props) {
    return (
        <div>

            <div className="btncard-container">
                <Card  eachCard={props.eachData} />
                <div className="btn-container">
                    <button type="button" class="btn btn-success round">Success</button>
                </div>
            </div>

        </div>


    );
}
export default BtnCard;
