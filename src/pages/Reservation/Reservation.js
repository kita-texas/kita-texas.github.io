import React, { useState } from "react";
import './Reservation.css'
import { useLocation } from "react-router-dom";
import { CleanerPlans } from "../Pricing/PlanList";

function Reservation() {
    console.log("zipcode")

    const location = useLocation();
    // eslint-disable-next-line
    const zipCode = location.state?.zipCode; 

    const [selectedPlanId, setSelectedPlanId] = useState();

    const handlePlanSelect = (planId) => {
        setSelectedPlanId(planId);
    };

    return (
        <div className="Reservation">
            <h1 className="text-align-left secondary-color">Select Plan</h1>
            <div className="grid-row3">
                {CleanerPlans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        id={plan.id}
                        planName={plan.planName}
                        price={plan.price}
                        descriptionList={plan.descriptions}
                        isSelected={plan.id === selectedPlanId}
                        onPlanClick={() => handlePlanSelect(plan.id)}
                    />
                ))}
            </div>
            <button className={`${selectedPlanId ? "primary-container" : "surface-container"} continue-button`} onClick={{}}>Continue</button>
        </div>
    )
}

export default Reservation;

function PlanCard({ id, planName, price, descriptionList, isSelected, onPlanClick }) {

    return (
        <div 
            className={`planCard  ${isSelected ? "primary-container" : "surface-container"}`} 
            onClick={onPlanClick}
        >
            <h3>{planName}</h3>
            <div className="text-align-left margin-8">
                {descriptionList?.map((item) => (
                    <p style={{margin: "2px"}}>{item}</p>
                ))}
                <h3 className="bold">{price}</h3>
            </div>
        </div>
    )
}