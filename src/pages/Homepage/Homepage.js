import React, { useState } from "react";
import "./Homepage.css";
import HelperCard from "../../components/HelperCard/HelperCard";
import { Search, LocationOn, PersonSearch, ContactPage, CleaningServices, SupportAgent, FitnessCenter } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; //CSS for Simple Datepicker

function Homepage() {
    const minDeservationDate = new Date();
    minDeservationDate.setDate(minDeservationDate.getDate() + 7);

    const [startDate, setStartDate] = useState();

    const scrollTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    return (
        <div className="Homepage">
            <div id="Top-banner">
                <div id="Top-banner-container">
                    <h1>Find Truested Cleaning Near You</h1>
                    <div id="Top-banner-container-inputs">
                        <input type="text" id="zip-code-input" maxLength={10} placeholder="Enter Zip Code" />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            minDate={minDeservationDate}
                            isClearable={true}
                            dateFormat={"Pp"}
                            placeholderText="Select date and starting time"
                        />
                        <button id="top-banner-search-btn" onClick={{}}><Search /></button>
                    </div>
                </div>
            </div>
            <div className="full-width-container">
                <h1>How to use service</h1>
                <div className="how-to-steps">
                    <HowToCard
                        icon={<LocationOn sx={{ fontSize: "48px", color: "var(--md-sys-color-secondary)" }} />}
                        heading="Enter ZipCode and Date"
                        description="Enter your ZipCode and date to find available clearns"
                    />
                    <HowToCard
                        icon={<PersonSearch sx={{ fontSize: "48px", color: "var(--md-sys-color-secondary)"}} /> }
                        heading="Choose your Cleaner"
                        description="Compare cleaners and choose a cleaner you want"
                    />
                    <HowToCard
                        icon={<ContactPage sx={{ fontSize: "48px", color: "var(--md-sys-color-secondary)"}} /> }
                        heading="Create a account"
                        description="Create or login to your account to finish checkout"
                    />
                    <HowToCard
                        icon={<CleaningServices sx={{ fontSize: "48px", color: "var(--md-sys-color-secondary)"}} /> }
                        heading="Send booking request"
                        description="Send cleaning request to the cleaner and get cleaned"
                    />
                </div>
                <button onClick={scrollTop} className="scroll-top-btn">Start Booking</button>
            </div>
            <div className="full-width-container surface-container">
                <h1>Your Safety and Service Quality</h1>
                <div className="how-to-steps">
                    <HowToCard
                        icon={<SupportAgent sx={{ fontSize: "48px", color: "var(--md-sys-color-secondary)"}} /> }
                        heading="Contact Lines"
                        description="Support Phone Number and Email available during service hours"
                    />
                    <HowToCard
                        icon={<FitnessCenter sx={{ fontSize: "48px", color: "var(--md-sys-color-secondary)"}} /> }
                        heading="Trained Cleaners"
                        description="Well trained cleaners deliver the high quality serve as you expect"
                    />
                </div>
                <button onClick={scrollTop} for="zip-code-input" className="scroll-top-btn">Start Booking</button>
            </div>
        </div>

    )
}

export default Homepage;

function HowToCard({ icon, heading, description }) {
    return (
        <div className="how-to-card">
            {icon}
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    )
}