import React from "react";
import './Pricing.css';

function Pricing() {
    return (
        <div className="Pricing">
            <div className="primary-container full-width-container horizontal-padding-8">
                <h1 className="montserrat-600" style={{ fontSize: "2.5rem" }}>Plans and Pricing</h1>
                <p className="nunito-500" style={{ fontSize: "1.5rem" }}>See our various and afforable plans</p>
            </div>
            <div className="full-width-container horizontal-padding-8 grid-row4">
                <PlanCard backgroundColor="blue" />
                <PlanCard backgroundColor="red" />
                <PlanCard backgroundColor="green" />
                <PlanCard backgroundColor="yellow" />
            </div>
        </div>
    )
}

export default Pricing;

function PlanCard({backgroundColor = "red"}) {
    return (
        <div className="PlanCard" style={{backgroundColor: `${backgroundColor}`}}>
            <p>$2000 / Session</p>
            <p>Tutor</p>
        </div>
    )

}

