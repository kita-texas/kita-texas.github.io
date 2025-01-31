import React from "react";
import "./Signup.account.css";
import "../Signup/Signup.css";

function SignupAccount() {
    return(
        <div className="signup">
            <h1 style={{visibility: "hidden"}}>sign up 2</h1>
            <div className="signup-container text-align-left">
                <div className="signup-form">
                    <h1>Account Info</h1>
                    <form action="/login" method="GET" autoComplete="on">
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="phone_number">Phone Number</label>
                            <br />
                            <input id="phone_number" name="phone_number" className="signup-input" type="tel" style={{width: "90%" }} placeholder="Phone Number"></input>
                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input id="email" name="email" className="signup-input" type="email" style={{width: "90%" }} placeholder="Email"></input>
                        </div>
                        <br /><br /><br />
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="password">Create Password</label>
                            <br />
                            <input id="password" name="password" className="signup-input" type="password" style={{width: "90%" }} placeholder="Password"></input>
                        </div>
                        <br />
                        <div style={{ width: "50%", display: "inline-block" }}>
                            <label htmlFor="re_password">Confirm password</label>
                            <br />
                            <input id="re_password" name="re_password" className="signup-input" type="password" style={{width: "90%" }} placeholder="Re-enter password"></input>
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

const passwordTextInput = document.getElementById("password");
const confirmTextInput = document.getElementById("re_password");
confirmTextInput.addEventListener('blur', function(event) {
    const passwordValue = passwordTextInput.value;
    const confirmValue = confirmTextInput.value;

    if(passwordValue === confirmValue) {
        console.log("same value" )
    } else {
        console.log("different value");
        confirmTextInput.style.borderColor = 'var(--md-sys-color-error'
    }
});


export default SignupAccount;