import React from "react";
import './Reservation.css'
import { useLocation } from "react-router-dom";

function Reservation() {
    console.log("zipcode")

    const location = useLocation();
    const zipCode = location.state?.zipCode;

    return (
        <div className="Reservation">
            <h1 className="text-align-left secondary-color">Select Plan</h1>
            <div className="grid-row3">
                <PlanCard planName={"Cleaning"} price={"$200/hr"} isSelected={false} />
            </div>
        </div>
    )
}

export default Reservation;

function PlanCard({ planName, price, isSelected }) {
    return (
        <div className={`${isSelected ? "primary-container" : "surface-container"}`}>
            <h3>{planName}</h3>
        </div>
    )
}