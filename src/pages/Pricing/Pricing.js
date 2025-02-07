import './Pricing.css';
import { BusinessCenterOutlined, InfoOutlined } from "@mui/icons-material";
import { StartBookingInputs } from "../Homepage/Homepage";
import { CleanerPlans, TutorPlans } from './PlanList';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import setPreferredLang from '../../components/translatePage';

function Pricing() {
    useEffect(() => {
        setPreferredLang();
    }, []);
    return (
        <div className="Pricing">
            <Header />
            <div className="primary-container full-width-container vertical-padding-8 centered-items">
                <h1 className="montserrat-600" style={{ fontSize: "2.5rem" }} >Plans and Pricing</h1>
                <p className="nunito-500" style={{ fontSize: "1.5rem" }}>See our various and afforable plans</p>
                <StartBookingInputs />
            </div>
            <h1 className="text-align-left secondary-color" style={{ paddingLeft: "16px" }}>Cleaning Plans</h1>
            <div className="full-width-container vertical-padding-8 grid-row3">
                {
                    CleanerPlans.map((plan) => <PlanCard key={plan.id} planName={`${plan.planName}`} icon={plan.icon} price={plan.price} />)
                }
            </div>
            <h1 className="text-align-left secondary-color" style={{ paddingLeft: "16px" }}>Tutor Plans</h1>
            <div className="full-width-container vertical-padding-8 grid-row3">
                {
                    TutorPlans.map((plan) => <PlanCard key={plan.id} planName={`${plan.planName}`} icon={plan.icon} backgroundColor={plan.backgroundColor} price={plan.price} />)
                }
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
            <p className="PlanCard-p nunito-600" style={{marginBottom: "0"}}>{price}</p>
            <p style={{margin: "4px", fontStyle: "italic", color: "gray"}}>+fees <InfoOutlined /></p>
        </div>
    )

}

