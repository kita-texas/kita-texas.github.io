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
            <div className="full-width-container horizontal-padding-8 grid-row4">
                <PlanCard planName="Weekly Cleaning" icon={<School sx={{fontSize: '48px'}} />} price={"$16/hr"}/>
                <PlanCard planName="Monthly Cleaning" />
                <PlanCard planName={"One Time"}/>
                <PlanCard planName={"Deep Cleaning"} />
            </div>
        </div>
    )
}

export default Pricing;

function PlanCard({planName, icon= <BusinessCenterOutlined sx={{fontSize: "48px"}} />, backgroundColor = "var(--md-sys-color-primary-container)", price}) {
    return (
        <div className="PlanCard">
            <h4 style={{backgroundColor: `${backgroundColor}`}}>{planName}</h4>
            {icon}
            <p>{price}</p>
        </div>
    )

}

