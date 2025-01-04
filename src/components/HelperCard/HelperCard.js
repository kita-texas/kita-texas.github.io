import React from "react";
import './HelperCard.css';
import { AccountCircleOutlined, Star } from "@mui/icons-material";

function HelperCard({name, rating}) {
    return(
        <div className="HelperCard">
            <div className="HelperCard-row1">
                <AccountCircleOutlined style={{fontSize: "52px", maxWidth: "52px"}} />
                <p className="Helper-name">{name}</p>
                <div className="Helper-rating">
                    <Star style={{color: "gold"}} />
                    <p>{rating ?? "new"}</p>
                </div>
            </div>
            
            <div className="HelperCard-row2">

            </div>
        </div>
    )
}

export default HelperCard;