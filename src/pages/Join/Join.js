import React, { useEffect } from "react";
import "./Join.css";
import Header from "../../components/Header/Header";
import setPreferredLang from "../../components/translatePage";

function Join() {
    useEffect(() => {
        setPreferredLang();
    },[]);
    return(
        <div>
            <Header />
            <div className="primary-container vertical-padding-8">
                <h1>Join Us as Employee</h1>
                <h4>Work flex </h4>
            </div>
        </div>
    )
}

export default Join;