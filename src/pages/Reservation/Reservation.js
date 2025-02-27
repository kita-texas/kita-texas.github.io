import React, { useEffect, useState } from "react";
import './Reservation.css'
import { useLocation, useNavigate } from "react-router-dom";
import { CleanerPlans } from "../Pricing/PlanList";
import Header from "../../components/Header/Header";
import setPreferredLang from "../../components/translatePage";

function Reservation() {
    console.log("zipcode")

    const location = useLocation();
    const navigate = useNavigate();

    // eslint-disable-next-line
    const zipCode = location.state?.zipCode; 

    const [selectedPlanId, setSelectedPlanId] = useState();

    const handlePlanSelect = (planId) => {
        if(selectedPlanId === planId) {
            setSelectedPlanId(null);
        } else {
            setSelectedPlanId(planId);
        }
    };

    const navigateToCleanerSelect = () => {
        navigate('/reservation/cleaner')
    }

    useEffect(() => {
        setPreferredLang();
    },[]);

    return (
        <div>
            <Header />
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
            <button 
                disabled={!selectedPlanId} 
                className={`${selectedPlanId ? "primary-container" : "surface-container"} continue-button`} 
                style={{color: "var(--md-sys-color-on-primary"}}
                onClick={navigateToCleanerSelect}
            >
                Continue
            </button>
        </div>
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