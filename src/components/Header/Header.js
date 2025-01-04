import { useState } from "react";
import './Header.css'
import '../../themeColor.css'
import { Menu, Close } from "@mui/icons-material";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("handleIsMenuOpen clicked");
        console.log(isMenuOpen)
    }
    return (
        <div className="Header">
            <h1 className="name">Home Bridge</h1>
            <div className="Header-items">
                <a href="#">What we do</a>
                <a href="#/plan">Pricing</a>
                <a href="#">Join as helper</a>
            </div>
            <div className="Header-sideMenu">
                <Menu className="MenuIcon" onClick={handleIsMenuOpen} sx={{fontSize: 46}} />
                <SideMenu isOpen={isMenuOpen} onCloseClick={handleIsMenuOpen} />
            </div>
        </div>
    )
}

export default Header;

function SideMenu({isOpen, onCloseClick}) {
    return (
        <div className={`Header-sideMenuContainer ${isOpen? 'open' : ''}`}>
            <Close className="closeIcon" onClick={onCloseClick} sx={{ fontSize: 46 }} />
            <a href="#">What we do</a>
            <a href="#/plan">Plans</a>
            <a href="#">Join as helper</a>
        </div>
    )
}