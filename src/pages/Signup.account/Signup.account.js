import React, { useEffect } from "react";
import "./Signup.account.css";
import "../Signup/Signup.css";
import Header from "../../components/Header/Header";
import setPreferredLang from "../../components/translatePage";

function SignupAccount() {
    useEffect(() => {
        setPreferredLang();
    }, []);
    return(
        <div>
            <Header />
        <div className="signup">
            <h1 style={{visibility: "hidden"}}>sign up 2</h1>
            <div className="signup-container text-align-left">
                <div className="signup-form">
                    <h1>Account Info</h1>
                    <form action="/login" method="GET" autoComplete="on">
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="phone_number">Phone Number*</label>
                            <br />
                            <input required="required" id="phone_number" name="phone_number" className="signup-input" type="tel" style={{width: "90%" }} placeholder="Phone Number"></input>
                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="email">Email*</label>
                            <br />
                            <input required="required" id="email" name="email" className="signup-input" type="email" style={{width: "90%" }} placeholder="Email"></input>
                        </div>
                        <br /><br /><br />
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="password">Create Password*</label>
                            <br />
                            <input required="required" id="password" name="password" className="signup-input" type="password" style={{width: "90%" }} placeholder="Password"></input>
                        </div>
                        <br />
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="re_password">Confirm password*</label>
                            <br />
                            <input required="required" id="re_password" name="re_password" className="signup-input" type="password" style={{width: "90%" }} placeholder="Re-enter password"></input>
                        </div>
                        <div className="signup-bottom">
                            <hr />
                            <p style={{display: "inline"}}>* Required</p>
                            <button type="submit" className="signup-button">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}




export default SignupAccount;