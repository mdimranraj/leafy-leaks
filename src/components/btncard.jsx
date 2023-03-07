import React from "react";
import Card from "./card";

function BtnCard() {
    return (
        <div>

            <div className="btncard-container">
                <Card />
                <div className="btn-container">
                    <button type="button" class="btn btn-success round">Success</button>
                </div>
            </div>

        </div>


    );
}
export default BtnCard;
