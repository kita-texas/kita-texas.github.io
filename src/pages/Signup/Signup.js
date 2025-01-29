import React from "react";
import './Signup.css'

function Signup() {
    return (
        <div className="signup">
            <h1>Sign up to <p className="lobster" style={{ display: "inline" }}>Home Bridge</p></h1>
            <div className="signup-container text-align-left">
                <div className="signup-form">
                    <h1>About You</h1>
                    <form action="/#/login" method="GET" autoComplete="on">
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label for="first_name">First Name</label>
                            <br />
                            <input id="first_name" name="first_name" className="signup-input" style={{ width: "90%" }} placeholder="First"></input>

                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label for="last_name">Last Name</label>
                            <br />
                            <input id="last_name" name="last_name" className="signup-input" style={{ width: "90%" }} placeholder="Last"></input>
                        </div>
                        <br /> <br /> <br />
                        <div style={{ display: "inline-block", width: "65%" }}>
                            <label for="addressline_1">Address line 1</label>
                            <br />
                            <input id="addressline_1" name="addressline_1" className="signup-input" style={{ width: "90%" }} placeholder="Type address"></input>
                        </div>
                        <div style={{ display: "block", width: "65%" }}>
                            <label for="addressline_2">Address line 2</label>
                            <br />
                            <input id="addressline_2" name="addressline_2" className="signup-input" style={{ width: "90%" }} placeholder="Type address"></input>
                        </div>
                        <br /> <br />
                        <div style={{ display: "inline-block", width: "30%" }}>
                            <label for="state">State</label>
                            <br />
                            <input id="state" name="state" className="signup-input" style={{ width: "70%" }} placeholder="Select state"></input>
                        </div>
                        <div style={{ display: "inline-block", width: "40%" }}>
                            <label for="zipcode">Zipcode</label>
                            <br />
                            <input id="zipcode" name="zipcode" className="signup-input" style={{ width: "90%" }} placeholder="Type Zipcode"></input>
                        </div>
                        <div className="signup-bottom">
                            <hr />
                            <button type="submit" className="signup-button">Continue</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup;