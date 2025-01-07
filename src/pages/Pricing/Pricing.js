import React from "react";
import './Pricing.css';
import { School, BusinessCenterOutlined } from "@mui/icons-material";

function Pricing() {
    return (
        <div className="Pricing">
            <div className="primary-container full-width-container horizontal-padding-8">
                <h1 className="montserrat-600" style={{ fontSize: "2.5rem" }}>Plans and Pricing</h1>
                <p className="nunito-500" style={{ fontSize: "1.5rem" }}>See our various and afforable plans</p>
            </div>
            <h1 className="text-align-left secondary-color" style={{paddingLeft: "16px"}}>Cleaning Plans</h1>
            <div className="full-width-container horizontal-padding-8 grid-row3">
                <PlanCard planName="Weekly Cleaning" icon={<School sx={{ fontSize: "48px", paddingTop: "8px" }} />} price={"From $16/hr"} />
                <PlanCard planName={"One Time"} />
                <PlanCard planName={"Deep Cleaning"} />
            </div>
            <h1 className="text-align-left secondary-color" style={{paddingLeft: "16px"}}>Tutor Plans</h1>
            <div className="full-width-container horizontal-padding-8 grid-row3">
                <PlanCard planName={"One Time"} backgroundColor="var(--md-sys-color-tertiary-container" />
                <PlanCard planName={"Deep Cleaning"} backgroundColor="var(--md-sys-color-tertiary-container" />
            </div>
        </div>
    )
}

export default Pricing;

function PlanCard({ planName, icon = <BusinessCenterOutlined sx={{ fontSize: "48px", paddingTop: "8px" }} />, backgroundColor = "var(--md-sys-color-primary-container)", price = "From $---" }) {
    return (
        <div className="PlanCard">
            <h4 style={{ backgroundColor: `${backgroundColor}` }} className="PlanCard-h4">{planName}</h4>
            {icon}
            <p className="PlanCard-p nunito-600">{price}</p>
        </div>
    )

}

